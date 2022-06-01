import express, { Request, Response } from "express"
import cors from "cors"
import { dados, dad } from "./data"

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3005, () => console.log("Servidor em 3005"))



app.get("/test", (request:Request, response:Response)=>{


response.status(200).send("API está ativa")
})

app.post("/adicionapro", (request:Request, response:Response)=>{

  const name = (request.body.name)
 
 const newdata = {
   id: Date.now().toString(),
   name: (request.body.name),
   price: (request.body.price)

 }

 dados.push(newdata)

 response.status(200).send(dados) 
})


app.get("/allprod", (request:Request, response:Response)=>{
  
  response.status(200).send(dados)
})

app.put("/alteraprod/:id", (request:Request, response:Response)=>{

  const id = (request.params.id)
  const index = dados.findIndex(dad => dad.id === id)

   dados[index].name = request.body.name
   dados[index].price = request.body.price

   response.status(200).send(dados)


})

app.delete("/evapprod/:id", (request:Request, response:Response)=>{
   
   const id = (request.params.id)

   const delprod = dados.findIndex((dados:any)=>{
     return dados.id === id
   })
 dados.splice(delprod, 1)

 response.status(200).send(dados)

})


app.delete("/deletarf/:id", (request:Request, response:Response)=>{
try {
  const produto = (request.params.id)

  const deletaprod = dados.filter((dad) =>{
  if(dad.id !== produto){
    return dad
  }
  })
  if(!produto){
    response.statusCode = 400
    throw new Error("Id não reconhecida!")
  }
  
  if(produto === undefined){
    response.statusCode = 404
    throw new Error("Não conheço esse produto x_X")
  }

  response.status(200).send({deletaprod})

} catch (error:any) {
  response.send(error.message)
  if(response.statusCode === 200){
    response.status(500).end()
  }else{
    response.send(error.message)
  }
}

})

app.post("/addprod", (request:Request, response:Response)=>{

try {
  const name = (request.body.name)
  const price = (request.body.price)
 if(name === "" && price === 0){
    response.statusCode = 400
    throw new Error("Por favor colocar nome e valor!")
 }
 if(name !== String || price !== Number){
  response.statusCode = 404
  throw new Error("O nome precisa ser em texto e o valor em numeros!")
}
if( price <= 0){
  response.statusCode = 405
  throw new Error("O valor tem que ser maior que 0")
}
  const newdata = {
    id: Date.now().toString(),
    name: (request.body.name),
    price: (request.body.price)
 
  }
 
  dados.push(newdata)
 
  response.status(200).send(dados) 
} catch (error:any) {
  response.send(error.message)
  if(response.statusCode === 200){
    response.status(500).end()
  }else{
    response.send(error.message)
  }
}

})

app.put("/editproduto/:id", (request:Request, response:Response)=>{

  const id = (request.params.id)
  const index:any = dados.findIndex(dad => dad.id === id)
  const price =  (request.body.price)
 try {
  if(!price){
    response.statusCode = 400
    throw new Error("Por favor colocar o valor!")
 }
 if( price !== Number){
  response.statusCode = 404
  throw new Error("O valor precisa ser em numeros!")
}
if( price <= 0){
  response.statusCode = 405
  throw new Error("O valor tem que ser maior que 0")
}
  if(index.id !== id){
    response.statusCode = 405
    throw new Error("Esse produto não foi encontrado")
  }
 } catch (error:any) {
  response.send(error.message)
  if(response.statusCode === 200){
    response.status(500).end()
  }else{
    response.send(error.message)
  }
 }
   dados[index].name = request.body.name
   dados[index].price = request.body.price

   response.status(200).send(dados)


})