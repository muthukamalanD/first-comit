
import {createConnection} from "../index.js";
import express from "express";
import bcrypt from "bcrypt";
import {insertUser} from "../helper.js"

const router = express.Router();

router.route("/signup").post( async (request, response)=> {
    const { username , password,avatar } = request.body;
    const client = await createConnection();
    const hashedPassword = await genPassword(password);
    const newUser= insertUser(client,{username:username,password:hashedPassword,avatar})
    console.log(hashedPassword);
  response.send(newUser); 
   });

   async function genPassword(password){
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password , salt);
    return hashedPassword;
  }
  
  export const userRouter = router;