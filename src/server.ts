import express, { Request, Response, Router} from 'express'
import cors from "cors"
import bodyParser from "body-parser"
import { Routers } from './routers'
import multer from 'multer';

import dotenv from 'dotenv'
import { Models } from './models';
import { sequelize } from './database';
dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000
const upload = multer();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(upload.any()); 

app.get('/', async (req: Request, res: Response) => {
    res.json("Welcome To Api Example")
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}.`)
});


const temp_router = Router()
for (const route of Routers) {
    temp_router.use(route.route, route.controller.router)
}

app.use('/api', temp_router);

async function start(){
    await sequelize.authenticate()
    for (const model of Models) {
        console.log('Update model:', model.name)
        await model.sync()
        .then(() => {
          console.log("Synced db.");
        })
        .catch((err:any) => {
          console.log("Failed to sync db: " + err.message);
        });
        await model.sync({ alter: true });
    }
}
start();