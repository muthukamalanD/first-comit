import jwt from "jsonwebtoken";
import {createConnection} from "../index.js";
import express from "express";
import bcrypt from "bcrypt";
import {insertUser} from "../helper.js"

const router = express.Router();

router.route("/").get( async (request, response)=> {
  const client = await createConnection();
  const contestant = await getAllUser(client);
response.send(contestant); 
 })
  async function getAllUser(client, filter) {
  const result = await client.db("kamal").collection("user").findOne(filter);
  console.log('inserted succesfully', result);
  console.log("succesfully connected all user");
  return result;
}
;
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
  
  router.route("/login").post( async (request, response)=> {
    const { username , password } = request.body;
    const client = await createConnection();
    const user = await getAllUser(client,{username : username});
    const inDbstorePassword = user.password;
    const isMatch = await bcrypt.compare(password, inDbstorePassword);
    if (isMatch) {
      const token = jwt.sign({id:user._id},process.env.SECERET_KEY)
      response.send({Message:"accepted",token :token});
    }else{
      response.send({Message:"declined"});
    }
  
   });

  export const userRouter = router;