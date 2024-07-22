import { Sequelize } from "sequelize-typescript";
import { Task } from "../models/task.models";
require('dotenv').config();

const sequelize = new Sequelize({
    dialect: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    username: process.env.DB_USER || 'user',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_DATABASE || 'postgres',
    models: [Task],
})

export default sequelize