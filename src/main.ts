import express from "express";
import router from "./routers";
import sequelize from "./config/database";

const app = express();

app.listen(3001)
app.use(express.json())

app.use('/api', router)

sequelize.sync().then(() => {
    console.log('Connection Success ');
}).catch((error) => {
    console.log(`Connection Error ${error}`);
})