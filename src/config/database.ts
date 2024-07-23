import { Sequelize } from "sequelize-typescript";
import { Task } from "../models/task.models";
import { Tag } from "../models/tag.models";
import { TaskTag } from "../models/taskTag.model";
require('dotenv').config();

const sequelize = new Sequelize({
    dialect: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    username: process.env.DB_USER || 'user',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_DATABASE || 'postgres',
    models: [Task, Tag, TaskTag],
})

export default sequelize