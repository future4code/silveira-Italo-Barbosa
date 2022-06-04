import express, { Request, Response, Express } from 'express'
import cors from 'cors'
import { users } from './dados'


const app: Express = express()
app.use(express.json())
app.use(cors())

app.get("/test", (request: Request, response: Response) => {
  response.status(200).send("Ativa!")
})

app.listen(3005, () => {
  console.log('Server is running at 3005')
})

app.post("/regist", (request:Request, response:Response)=>{
try {

  const {name, cpf, datebirthST} = request.body
  

  const {day, month, year} = datebirthST.split("/")
 
  const datebirth: Date = new Date(`${month}-${day}-${year}`)


  const age:number = new Date().getTime() - datebirth.getTime()

  const yearC: number = age / 1000 / 60 / 60 / 24 / 365



  if(yearC < 18){
    response.statusCode = 409
    throw new Error("Idade incorreta, menor que 18")
  }


  users.push({
    name,
    cpf,
    datebirth,
    balance: 0,
    state: []
  })

  response.status(202).send("Conta criada!")
  
} catch (error:any) {
  
  response.send(error.message)


}


})

app.get("/allusers", (request:Request, response:Response)=>{

  try {
    if(!users.length){
      response.statusCode = 404
      throw new Error("Conta inexistente!")
    }



response.status(200).send(users)
  } catch (error:any) {
    response.send(error.message)
  }

})