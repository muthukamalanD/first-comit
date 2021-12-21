import express from "express";
import dotenv from 'dotenv';
import { MongoClient } from "mongodb";
import { pollRouter } from "./routes/paths.js";
import { userRouter } from "./routes/user.js";
import bcrypt from "bcrypt";

dotenv.config();
const app = express();
app.use(express.json());

export async function createConnection(){
const MONGO_URL = process.env.URL;
;

const client = new MongoClient(MONGO_URL);
try{
  await client.connect();
 
  return client;
  // getPollById(client, "5");
} catch (err){
  console.log(err);
}
};


app.get('/', (request, response)=> {
  response.send("hi guvi welcome!!!");
  

});


app.use('/kamal',pollRouter)
app.use('/user',userRouter)

async function genPassword(password){
  const salt = await bcrypt.genSalt(10);
  const hashedpassword = await bcrypt.hash(password ,salt);
  console.log("password",hashedpassword);
  return hashedpassword;
}

genPassword("password@123");

const PORT = process.env.PORT;
app.listen(PORT,()=>console.log("server started in 5000 "));
