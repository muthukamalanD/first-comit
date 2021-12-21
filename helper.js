// response.send(kamal);
export async function getAllPoll(client, filter) {
  const result = await client.db("kamal").collection("poll").find(filter).toArray();
  console.log('inserted succesfully', result);
  console.log("succesfully connected all poll");
  return result;
}
;
export async function getPollById(client, id) {
  const result = await client.db("kamal").collection("poll").findOne({ id: id });
  console.log('inserted succesfully', result);
  console.log("succesfully connected all poll by id");
  return result;
}
;
export async function getPollByColor(client, color) {
  const result = await client.db("kamal").collection("poll").findOne({ color: color });
  console.log('inserted succesfully', result);
  console.log("succesfully connected poll by color");
  return result;
}
;
export async function getPollByContent(client, content) {
  const result = await client.db("kamal").collection("poll").findOne({ content: content });
  console.log('inserted succesfully', result);
  console.log("succesfully connected poll by content");
  return result;
}
;
export async function deletePollById(client, id) {
  const result = await client.db("kamal").collection("poll").deleteOne({ id: id });
  console.log('deleted  succesfully', result);
  console.log("succesfully connected all poll by id");
  return result;
}
;
export async function insertPoll(client, polls) {
  const result = await client.db('kamal').collection('poll').insertMany(polls);
  console.log('inserted succesfully', result);
  return result;
}
export async function insertUser(client, user) {
  const result = await client.db('kamal').collection('user').insertOne(user);
  console.log('inserted succesfully', result);
  return result;
}
