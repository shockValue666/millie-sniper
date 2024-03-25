import express, {Request,Response} from "express";
import bodyParser from 'body-parser';
import { v4 } from 'uuid';

import * as dotenv from 'dotenv';
dotenv.config();
import { createClient } from '@supabase/supabase-js';
import { Connection, Keypair, LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction, sendAndConfirmTransaction } from '@solana/web3.js';
import base58 from 'bs58';
import { checkTransaction, saveTransaction, sendFee, updateBalance } from '../helpers';
const supabaseUrl = process.env.SUPABASE_URL || "";
const supabaseKey = process.env.SUPABASE_KEY || "";
const supabase = createClient(supabaseUrl, supabaseKey);


const app = express();
app.use(bodyParser.json());



// app.get("/", (req, res) => res.send("Express on Vercel"));
app.get("/", (request: Request, response: Response) => {
    response.status(200).send("Server is running");
});

app.post('/webhook', (request: Request, response: Response) => {
    const requestBody = request.body;   
    //print the json to the console
    console.log("data received by the webhook: ", requestBody);

    //send a response that we received and processed the request
    response.status(200).send('Webhook received the request lolllll');
});


app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;