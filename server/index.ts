import express, { Express, Request, Response } from "express";
import authRouter from "./router/auth.router";
import dotenv from "dotenv";
import cors from "cors";
import "./db/conn";

dotenv.config();

const app: Express = express();
const port: string | undefined = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use("/auth", authRouter);

app.listen(port, () => {
    console.log(`Server is Running on http://localhost:${port}`);
});
