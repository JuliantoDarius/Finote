import { connect } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const DB_URI: string = process.env.DB_URI || "false";
connect(DB_URI);
