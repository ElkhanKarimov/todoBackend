import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import todoRoutes from "./routes/todos.js";
import router from "./routes/auth.routes.js"

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8000;
const MONGODB_URI = process.env.MONGODB_URI;

app.use(express.json());
app.use("/api/todos", todoRoutes)
app.use("/api/auth", router)


mongoose.connect(MONGODB_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is listening on PORT:${PORT} and Connected to MongoDB database`);
        });
    })
    .catch((error) => {
        console.log(error);
    })