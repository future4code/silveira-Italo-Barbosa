import express, { Request, Response, Express } from 'express'
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection"

const app: Express = express();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3005, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});


app.post("/user", async (request:Request, response:Response)=>{
try {
  if(!request.body.name){
    throw new Error("Nome invalido!")
  }
  if(!request.body.email){
    throw new Error("Email invalido!")
  }
  if(!request.body.nickName){
    throw new Error("nickName invalido!")
  }
 await connection.raw(`INSERT INTO users (id, name, nickName, email)
  VALUES(
    "${Date.now().toString()}",
    "${request.body.name}",
    "${request.body.nickName}",
    "${request.body.email}",
   )
  `)
  response.status(201).send("usuario salvo!")
  
    
} catch (error:any) {
  response.status(500).send(error.sqlMessage || error.message)
}
})





app.get("/user/:id", async (request:Request, response:Response)=>{

try {
  const id = Number(request.params.id)
  if(!id){
    throw new Error("id não indentificado ou inexistente!")
  }
  const retorno = await connection.raw(`
  SELECT * FROM users`)
  response.status(200).send(retorno)
} catch (error:any) {
  response.status(500).send(error.sqlMessage || error.message)
}


})

app.put("/user/edit/:id", async (request:Request, response:Response)=>{

  try {
  await connection("users")
  .update({
    name: request.body.name,
    nickname: request.body.nickname,
    email: request.body.email
  })
  .where({
    id: request.params.id
  })
    response.send("perfeito!")
  } catch (error:any) {
    response.status(500).send(error.sqlMessage || error.message)
  }
})

  app.post("/task", async (request:Request, response:Response)=>{
    try {
      if(!request.body.title){
        throw new Error("titulo invalido!")
      }
      if(!request.body.description){
        throw new Error("descrição invalida!")
      }
      if(!request.body.limitDate){
        throw new Error("dat invalida!")
      }
     await connection.raw(`INSERT INTO tasks (creatorUserId, title, description, limitDate)
      VALUES(
        "${Date.now().toString()}",
        "${request.body.title}",
        "${request.body.description}",
        ${request.body.limitDate},
       )
      `)
      response.status(201).send("task criada!")
      
        
    } catch (error:any) {
      response.status(500).send(error.sqlMessage || error.message)
    }
    })


    app.get("/task/:id", async (request:Request, response:Response)=>{

      try {
        //fiquei preso aqui
      } catch (error:any) {
        response.status(500).send(error.sqlMessage || error.message)
      }
      
      
      })



export default app