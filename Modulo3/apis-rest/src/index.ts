import express, { Request, Response } from 'express'
import cors from 'cors'

type User = {
  id: number,
  name: string,
  email: string,
  type: string,
  age: number
}



let users: User[] = [
 
  {
      id: 1,
      name: "Alice",
      email: "alice@email.com",
      type: "ADMIN",
      age: 12
  },
  {
      id: 2,
      name: "Bob",
      email: "bob@email.com",
      type: "NORMAL",
      age: 36
  },
  {
      id: 3,
      name: "Coragem",
      email: "coragem@email.com",
      type: "NORMAL",
      age: 21
  },
  {
      id: 4,
      name: "Dory",
      email: "dory@email.com",
      type: "NORMAL",
      age: 17
  },
  {
      id: 5,
      name: "Elsa",
      email: "elsa@email.com",
      type: "ADMIN",
      age: 17
  },
  {
      id: 6,
      name: "Fred",
      email: "fred@email.com",
      type: "ADMIN",
      age: 60
  }
]

const app = express()
app.use(express.json())
app.use(cors())

app.listen(3005, () => {
  console.log('Server is running at 3005')
})



app.get("/test", (request: Request, response: Response) => {
  response.status(200).send("Servidor on!")
})



app.get("/users", (request:Request, response:Response)=>{

 const dados = users

//A: o metodo adequado seria o get
//B: eu indicaria como sendo post ??
try {
  if(!users){
    throw new Error("Usuario não encontrado!")
    response.status(200).send(dados)
  }
 
} catch (error:any) {
  response.status(400).send(error)
}


})



app.get("/usertype", (request:Request, response:Response)=>{

   //A: tentei passar de uma forma limpa busca via find, tentei assim porque tinha,
   //buscado outros metodos que não deram certo.
   //B: sim passando parametros para comparar e limitando oque pode ser recebido pela requisição.
   try {
    let type = (request.params.type)
    const find:any = users.find(user => user.type === type)
     if(type !== find){
       throw new Error("type incorreto")
     }

   } catch (error:any) {
    response.status(400).send(error)
   }

})



app.get("/users/:name", (request:Request, response:Response)=>{

try {
  const name = request.params.name
  let usuario = users.filter((user)=>{
    return user.name === name
  })
  response.status(200).send(usuario)
  }
 
 catch (error) {
  response.status(400).send("Usuario não encontrado!")
}

//A: não entendi bem a pergunta
//B: certo

})

app.post("/criaruser", (request:Request, response:Response)=>{
const newuser:User = {
  id:request.body.id,
  name:request.body.name,
  email:request.body.email,
  type:request.body.type,
  age:request.body.age
}

try {
 if(!newuser.id){
   throw new Error("Id não identificado")
 }
 if(!newuser.name || newuser.name === ""){
  throw new Error("Faltou o nome")
}
if(!newuser.email || newuser.email === ""){
  throw new Error("Email invalido")
}
if(!newuser.type || newuser.type !== "NORMAL" || "ADMIN"){
  throw new Error("Type invalido")
}
if(!newuser.age || newuser.age <= 0){
  throw new Error("Essa idade não é permitida")
}



} catch (error:any) {
  response.status(400).send(error)
}



})



app.put("/criaruser", (request:Request, response:Response)=>{
  const newuser:User = {
    id:request.body.id,
    name:request.body.name,
    email:request.body.email,
    type:request.body.type,
    age:request.body.age
  }
  
  try {
   if(!newuser.id){
     throw new Error("Id não identificado")
   }
   if(!newuser.name || newuser.name === ""){
    throw new Error("Faltou o nome")
  }
  if(!newuser.email || newuser.email === ""){
    throw new Error("Email invalido")
  }
  if(!newuser.type || newuser.type !== "NORMAL" || "ADMIN"){
    throw new Error("Type invalido")
  }
  if(!newuser.age || newuser.age <= 0){
    throw new Error("Essa idade não é permitida")
  }
  
  
  
  } catch (error:any) {
    response.status(400).send(error)
  }
  
  //A: acredito que a mudança está no comportamento da API que em vez de adicionar,
  //ela age como se tivesse modificando.
  //B: Não considero, ao menos que tenha motivos para efetuar a troca,
  // acredito que o post atende bem ao que é solicitado.
  
  })