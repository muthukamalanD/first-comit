import { getAllPoll, getPollById, getPollByColor, getPollByContent, insertPoll, deletePollById } from "../helper.js";
import {createConnection} from "../index.js";
import express from "express";

const router = express.Router();

router.route("/").get( async (request, response)=> {
    const client = await createConnection();
    const contestant = await getAllPoll(client);
  response.send(contestant); 
   }).post( async (request, response)=> {
    const client = await createConnection();
    const polls = request.body;
    const contestant = await insertPoll(client, polls);
  response.send(contestant); 
   });

   router.route("/:id").get(async (request, response)=> {
    const id = request.params.id;
   // const contestant= kamal.filter((data)=>data.id== id)
  const client = await createConnection();
  const contestants = await getPollById(client, +id);
  
  response.send(contestants);  
  }).delete(async (request, response)=> {
    const id = request.params.id;
  const client = await createConnection();
  const contestants = await deletePollById(client, id);
  
  response.send(contestants);  
  });
  
  router.get("/name/:color", async (request, response)=> {
   const color = request.params.color;
  const client = await createConnection();
  const contestants = await getPollByColor(client, color);
  
  response.send(contestants);  
  });
  
  router.get("/company/:content", async (request, response)=> {
   const content = request.params.content;
  const client = await createConnection();
  const contestants = await getPollByContent(client, content);
  response.send(contestants);  
  });
  
  
  
  export const pollRouter = router;