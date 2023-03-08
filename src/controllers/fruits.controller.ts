import { AbstractController } from "./abstract.controller";
import {Fruits} from '../models/fruit.model';
import { Request, Response, NextFunction } from 'express';
export class FruitsController extends AbstractController {  
    constructor() {
        super()
        this.router.get('/', this.list);
        this.router.post('/', this.create);
    }

    private async list(req: Request, res: Response, next: NextFunction) {
        try {
            const fruit = await Fruits.findAll({
                order: [
                    ['id', 'DESC'],
                ],
            })

            res.json({
                success:true,
                fruit,
                total:fruit.length
            })
        }catch (err:any) {
            res.json({
                success:false,
                message: err.message,
            })

            next({
                message: err.message,
                stack: err.stack
            })
        }
    }


    private async create (req: Request, res: Response, next: NextFunction) {
        try {
            const {name,image} = req.body;

            const checkfruit = await Fruits.findAll({
                order: [
                    ['id', 'DESC'],
                ],
            })

            const fruit = await Fruits.create({
                id:checkfruit.length+1,
                name,
                image,
            })

            res.json({
                success:true,
                fruit
            })
        }catch (err:any) {
            res.json({
                message: err.message,
            })

            next({
        
                message: err.message,
                stack: err.stack
            })
        }
    }

}