import { Sequelize } from "sequelize";
import dotenv from "dotenv"
dotenv.config();

export const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT
    });
    
export const startDB = async ()=>{
    try {
        await sequelize.authenticate();
        console.log("Se ha auteticado con el Servidor");
        await sequelize.sync();
    } catch (error) {
       console.log(error);
    }
};
