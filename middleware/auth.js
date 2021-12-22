import jwt from "jsonwebtoken";




export const auth = (request,response,next) =>{
    try{
    const token = request.header('x-auth-token');
    jwt.verify(token , process.env.SECERET_KEY);
    next();
    }catch(err){
        response.status(402);
        response.send({err:err.message})
    }

};