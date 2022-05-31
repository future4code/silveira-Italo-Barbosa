import express, {Response, Request} from "express"
import cors from "cors"
import { users } from "./data"
import {afazeres, afazer} from "./dados"
const app = express()

app.use(cors())
app.use(express.json())

app.listen(3004, () => console.log("Servidor online em 3004"))

app.get("/playlists", (req, res) => {
  // tenho todos os usuários
  const currentUsers = users // array de objetos
  console.log(1, currentUsers);

  // Vou pegar as playlists de cada usuário
  const userPlaylists = currentUsers.map((user: any) => {
    return user.playlists 
  }) // array de arrays
  console.log(2, userPlaylists)

  const result = userPlaylists.flat(1)

  res.status(200).send(result);
})


app.get("/tracks", (req, res) => {
  const playlistId = req.query.id

  if(!playlistId) res.status(400).send("Não é possível realizar a operação. ID da playlista ausente")

  const allPlaylists = users.map((user: any) => {
    return user.playlists
  }).flat(1)

  let tracks;

  allPlaylists.forEach((playlist: any) => {
    if (playlist.id === playlistId) {
      tracks = playlist.tracks
    }
  })

  res.status(200).send(tracks)
})

app.delete("/playlist", (req, res) => {
  const id = req.query.id

  users.forEach((user: any) => {
    user.playlists = user.playlists.map((playlist: any) => {
      if (playlist.id === id) {
        return {}
      }
      return playlist
    });
  })

  res.status(200).send(users)
})

app.delete("/track", (req, res) => {
  const trackId = req.query.trackId
  const playlistId = req.query.playlistId

  const allPlaylists = users
    .map((user: any) => {
      return user.playlists;
    })
    .flat(1);
  for (let i = 0; i <= allPlaylists.lenght; i++) {
    allPlaylists[i]
  }

  for (let playlist of allPlaylists) {
    playlist
  }

  allPlaylists.forEach((playlist: any) => {
    if (playlist.id === playlistId) {
       playlist.tracks = playlist.tracks.map((track: any) => {
         if (track.id === trackId) {
           return {};
         }
         return track;
       });
    }
  })

  res.status(200).send(allPlaylists)
})

app.get("/ping", (request:Request, response:Response) => {          
  response.send("Pong! 🏓")
})


app.get("/tarefasconcluidas/:status", (request:Request, response:Response)=>{

  let status: string|boolean = request.params.status
  console.log(status);
   

  if(status === "true"){
    status = true
  }else if(status === "false"){
    status = false
  }

const tarefasconcluidas = afazeres.filter((title)=>{

  return title.completed === status
})
response.status(200).send({tarefasconcluidas})

}
)



app.post("/adicionatarefa", (request:Request, response:Response)=>{
 const userId = (request.body.id)
 const novatarefa:afazer = {
   id: Date.now(),
   userId: (request.body.id),
   title: (request.body.id),
   completed: (request.body.completed)

 }
 
 afazeres.push(novatarefa)
 
 response.status(200).send(afazeres)

 
})

/*app.put("/alterartarefa/:id", (request:Request, response:Response)=>{

const id = Number(request.params.id)

for(let afazer of afazeres){
  if(id === afazer.id){
    if(afazer.completed === true){
      afazer.completed = status.false
    }else if(afazer.completed === false){
      afazer.completed = status.true
    }
  }
}
response.status(200).send(afazeres)

})*/

app.delete("/deletatarefa/:id", (request:Request, response:Response)=>{

const id = Number(request.params.id)

for(let index of afazeres){
if(id === index.id){
  response.send("tarefa apagada")
}else if(id !== index.id){
  response.send("tarefa não encontrada")
}
}
response.send(200).send(afazeres)
})


/*app.get("/tarefasusuario/:userId", (request:Request, response:Response) => {
 
  const userId = Number(request.params.id)



  const searchUser = afazeres.filter(userId =>{
    return afazeres.userId === userId
    })
  console.table(searchUser);

    const afazerUser = searchUser[0].afazeres.filter(userId => {
    return afazeres.userId === Number});
    console.table(afazerUser)




  });*/

