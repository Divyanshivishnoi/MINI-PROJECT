
import express from 'express';
import { dbConnection } from './database/dbConnection.js';
import dotenv from 'dotenv';

const app = express();
dotenv.config({path:"./config/config.env"});
   
app.use(express.json()); 
app.use(express.urlencoded({extended:true}));  //check the data type
dbConnection();
export default app;



