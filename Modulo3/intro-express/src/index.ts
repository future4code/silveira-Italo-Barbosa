import express, { Request, Response } from 'express'
import cors from "cors"



const app = express()
app.use(express.json())


app.use(cors())


app.listen(3004, () => {
    console.log("Server running in http://localhost:3004");
   
});

app.post('/posts',(request:Request, response:Response)=> {
    
  body: JSON.stringify({
    "id": 1,
    "name": "",
    "email": "",
    "phone": "",
    "website": "",
    body: '',
    userId: 1,
  }),
 
  response.status(201).send(
      {message:`Dados criados`}
  )
})

app.get('/users',(resquest:Request, response:Response)=>{

    const users = ["tictictic", "flapflap", "nanana", "seila"]
    const retorna = users
    response.status(201).send(
        {message:retorna}
    )

})

type post = {

  id : "id",
  title : "title",
  body : "body",
  userId : "userId",

}


const posts = [
    {
        "userId": 1,
        "id": 1,
        "title": "seila",
        "body": "tamtamtamtmata"
      },
      {
        "userId": 1,
        "id": 1,
        "title": "fiufiufiufiufiu",
        "body": "NA-NI"
      },
      {
        "userId": 1,
        "id": 1,
        "title": "ahhhhahahahah",
        "body": "flapflapflapflap"
      },
];

// Achei melhor fora para evitar excesso de conteúdo em uma única parte.

app.get('/post',(resquest:Request, response:Response)=>{

    const resul = posts
    response.status(201).send(
        {message:resul}
    )

})

