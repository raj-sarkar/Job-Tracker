import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/user.routes.js";
import { connectDB } from "./lib/db.js";
import jobRouter from "./routes/job.routes.js";
import cors from 'cors';
import cookieParser from 'cookie-parser';

dotenv.config();
connectDB();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/job", jobRouter);

app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});
