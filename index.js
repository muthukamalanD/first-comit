import express from "express";
import dotenv from 'dotenv';
import { MongoClient } from "mongodb";
dotenv.config();
const app = express();
// const PORT = process.env.PORTAL;
async function createConnection(){
const MONGO_URL = process.env.URL;
;

const client = new MongoClient(MONGO_URL);
try{
  await client.connect();
 
  return client;
  // getPollById(client, "4");
} catch (err){
  console.log(err);
}
};



 
// async function insertPoll(client, kamal){
//   const result=await 
//   client.db('kamal').collection('poll').insertMany(kamal);
//   console.log('inserted succesfully',result);

// }

createConnection();

app.get('/', (request, response)=> {
  response.send("hi guvi welcome!!!");
  

});
// const kamal= [
//   {
//    "createdAt": "2021-11-12T17:51:55.914Z",
//    "name": "Wanda Wilderman",
//    "avatar": "https://cdn.fakercloud.com/avatars/baumannzone_128.jpg",
//    "id": "1"
//   },
//   {
//    "createdAt": "2021-11-12T15:26:16.166Z",
//    "name": "Leon Reichel",
//    "avatar": "https://cdn.fakercloud.com/avatars/n3dmax_128.jpg",
//    "id": "2"
//   },
//   {
//    "createdAt": "2021-11-11T20:16:03.993Z",
//    "name": "Antonia Sporer",
//    "avatar": "https://cdn.fakercloud.com/avatars/mashaaaaal_128.jpg",
//    "id": "3"
//   },
//   {
//    "createdAt": "2021-11-12T05:57:15.585Z",
//    "name": "Levi Williamson",
//    "avatar": "https://cdn.fakercloud.com/avatars/klefue_128.jpg",
//    "id": "4"
//   },
//   {
//    "createdAt": "2021-11-12T04:36:31.559Z",
//    "name": "Jean Johnston Jr.",
//    "avatar": "https://cdn.fakercloud.com/avatars/Shriiiiimp_128.jpg",
//    "id": "5"
//   },
//   {
//    "createdAt": "2021-11-11T20:20:43.264Z",
//    "name": "Miss Debra Mraz",
//    "avatar": "https://cdn.fakercloud.com/avatars/kevinjohndayy_128.jpg",
//    "id": "6"
//   },
//   {
//    "createdAt": "2021-11-11T23:56:19.246Z",
//    "name": "Marsha Heaney MD",
//    "avatar": "https://cdn.fakercloud.com/avatars/slowspock_128.jpg",
//    "id": "7"
//   },
//   {
//    "createdAt": "2021-11-12T05:16:11.394Z",
//    "name": "Gustavo Adams",
//    "avatar": "https://cdn.fakercloud.com/avatars/grrr_nl_128.jpg",
//    "id": "8"
//   },
//   {
//    "createdAt": "2021-11-12T00:20:22.040Z",
//    "name": "Ms. Esther Moen",
//    "avatar": "https://cdn.fakercloud.com/avatars/fran_mchamy_128.jpg",
//    "id": "9"
//   },
//   {
//    "createdAt": "2021-11-12T07:01:44.136Z",
//    "name": "Daniel Schroeder",
//    "avatar": "https://cdn.fakercloud.com/avatars/abdulhyeuk_128.jpg",
//    "id": "10"
//   },
//   {
//    "createdAt": "2021-11-11T19:11:44.770Z",
//    "name": "Oscar Spencer III",
//    "avatar": "https://cdn.fakercloud.com/avatars/adammarsbar_128.jpg",
//    "id": "11"
//   },
//   {
//    "createdAt": "2021-11-11T22:58:34.862Z",
//    "name": "Terrell Heathcote MD",
//    "avatar": "https://cdn.fakercloud.com/avatars/danvernon_128.jpg",
//    "id": "12"
//   },
//   {
//    "createdAt": "2021-11-12T18:29:39.283Z",
//    "name": "Patti Reilly",
//    "avatar": "https://cdn.fakercloud.com/avatars/billyroshan_128.jpg",
//    "id": "13"
//   },
//   {
//    "createdAt": "2021-11-11T19:21:21.909Z",
//    "name": "Misty Morar",
//    "avatar": "https://cdn.fakercloud.com/avatars/helderleal_128.jpg",
//    "id": "14"
//   },
//   {
//    "createdAt": "2021-11-12T16:59:04.650Z",
//    "name": "Mr. Ruth Fahey",
//    "avatar": "https://cdn.fakercloud.com/avatars/leehambley_128.jpg",
//    "id": "15"
//   }
//  ]


 app.get("/kamal", async (request, response)=> {
  const client = await createConnection();
  const contestant = await getAllPoll(client);

response.send(contestant); 

app.get("/kamal/:id", async (request, response)=> {
  const id = request.params.id;
 // const contestant= kamal.filter((data)=>data.id== id)
const client = await createConnection();
const contestants = await getPollById(client, id);

response.send(contestants);  
});

app.get("/kamal/name/:color", async (request, response)=> {
 const color = request.params.color;
const client = await createConnection();
const contestants = await getPollByColor(client, color);

response.send(contestants);  
});

app.get("/kamal/company/:content", async (request, response)=> {
 const content = request.params.content;
const client = await createConnection();
const contestants = await getPollByContent(client, content);
response.send(contestants);  
});


  // response.send(kamal);
  async function getAllPoll(client, filter) {
    const result = await client.db("kamal").collection("poll").find(filter).toArray()
    console.log('inserted succesfully',result);
    console.log("succesfully connected all poll");
    return result;
  };
  
 });

 async function getPollById(client, id) {
  const result = await client.db("kamal").collection("poll").findOne({ id : id});
  console.log('inserted succesfully',result);
  console.log("succesfully connected all poll by id");
  return result;
};
async function getPollByColor(client, color) {
  const result = await client.db("kamal").collection("poll").findOne({ color: color});
  console.log('inserted succesfully',result);
  console.log("succesfully connected poll by color");
  return result;
};
async function getPollByContent(client, content) {
  const result = await client.db("kamal").collection("poll").findOne({ content: content});
  console.log('inserted succesfully',result);
  console.log("succesfully connected poll by content");
  return result;
};

app.listen(5000,()=>console.log("server started in: "));
