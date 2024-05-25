import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import route from "./routes/userRoute.js"

const app = express();

app.use(bodyParser.json());
dotenv.config();
const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGOURL;

mongoose.connect(MONGOURL).then(() => {
    console.log("DataBase is Connected succesfully.");
    app.listen(PORT, () => {
        console.log(`Server is running on Port ${PORT}`);
    })
}).catch((error) => console.log(error));

app.use("/api/user", route);