import { Sequelize } from 'sequelize';
import dotenv from 'dotenv'
dotenv.config()



const {DB_HOST,DB_USERNAME,DB_PASSWORD,DB_DATABASE} = process.env

export const sequelize = new Sequelize(String(DB_DATABASE), String(DB_USERNAME), String(DB_PASSWORD), {
    host: DB_HOST,
    dialect: 'postgres',
    logging: false,
    pool: {
      max: 5,
      min: 0,
      acquire:30000,
      idle: 10000
    }
});