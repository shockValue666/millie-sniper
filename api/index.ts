import express, {Request,Response} from "express";
import bodyParser from 'body-parser';
import { v4 } from 'uuid';

import * as dotenv from 'dotenv';
dotenv.config();


const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;