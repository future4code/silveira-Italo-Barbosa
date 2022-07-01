import {Request, Response} from "express"
import { IdGenerator } from "../services/id"
import { UserDatabase } from "../data/UserDatabase"
import { hashMa } from "../services/Cript"
import { User } from "../data/User"
import Authenticator from "../services/Auth"
import { RecipeDatabase } from "../data/RecipeDatabase"
import { Recipe } from "../data/Recipe"



export class Controller{


async cadast (request: Request, response: Response): Promise<void> {
    try {
      const {name} = request.body 
      const {email} = request.body 
      const password = request.body.password 
      const role = request.body
     

      const hashMan = new hashMa()
      const hashPassword = await hashMan.hash(password)
      const idgenerate =  new IdGenerator
      const id = idgenerate.generateId()
      const authenticator = new Authenticator
      const token = authenticator.generateToken({
        id,
        role
      })
      const newUser = new User(id, name, email, hashPassword, role, token)
      const userdatabase = new UserDatabase()
      
      
      const user = userdatabase.findUser(email)
      if(user === email){
        response.status(401).send("Usuario já cadastrado!")
      }
      if(!name || name.length<0){
        response.status(401).send("nome invalido!")
      }
      if(!email || email.lenght<0){
        response.status(401).send("email invalido!")
      }
      if(!password || password.lenght<0){
        response.status(401).send("password invalido!")
      }


     await userdatabase.creatUser(newUser)

      

      response.status(200).send({
        token
      })
    } catch (error:any) {
      response.status(400).send({
        message: error.message
      })
    }
  }; 


async login (request:Request, response:Response):Promise<void> {

  try {

    if (!request.body.email || request.body.email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }

    const email = request.body.email

    const password = request.body.password


    
    const userdatabase = new UserDatabase()
    
    const user = await userdatabase.login(email, password);
    //Provalvemente metodo errado para comparar email e senha
    if (user.getPassword !== password ) {
      throw new Error("Invalid password");
    }
    if(user.getEmail !== email){
      throw new Error("invalid email")
    }

   const token = userdatabase.findUserToken(token)

    response.status(200).send({token});
  } catch (error:any) {
    response.status(400).send({
      message: error.message,
    });
  }
}; 



async getUs(request:Request, response:Response):Promise<void> {

    try {

      const token = String(request.header)
      const userdatabase = new UserDatabase
      const compare = userdatabase.findUserToken(token)
 
     
      response.status(200).send(compare)

    } catch (error:any) {
      response.status(500).send({
        message: error.message
      })
    }

}


async getUsother(request:Request, response:Response):Promise<void> {

  try {
    const id = String(request.params)
    const token = String(request.header)
    const userdatabase = new UserDatabase
    const compare = await userdatabase.findUserToken(token)
    const compareId = await userdatabase.findUserId(id)
   
    response.status(200).send(compareId && compare)

  } catch (error:any) {
    response.status(500).send({
      message: error.message
    })
  }

}


async createRecipe(request:Request, response:Response):Promise<void> {

 try {

  const title = String(request.body)
  const description = String(request.body)
  const token = String(request.header)
  const idgenerate =  new IdGenerator
  const id = idgenerate.generateId()
  const date = String(Date.now)
  

  const recipedatabase = new RecipeDatabase()

  const recipe =  new Recipe(title, description, token, id, date )

  await recipedatabase.creatRecipe(recipe) 

  response.status(201).send("receita criada")

 } catch (error:any) {

  throw new Error(error.sqlMessage || error.message)

 }

}

async getRecipe(request:Request, response:Response):Promise<void> {

  try {
    const id = String(request.params)
    const token = String(request.header)
    const userdatabase = new UserDatabase
    const compare =String( userdatabase.findUserToken(token))
    const recipebase = new RecipeDatabase()
    if(!token || compare !== token){
       response.status(400).send("Token invalid")
    }
    const result =String( recipebase.findRecipe(id))
    if(!id || result !== id){
       response.status(400).send("Recipe not found")
    }
    
   
    response.status(200).send(result)

  } catch (error:any) {
    
      throw new Error(error.sqlMessage || error.message)
    
  }

}

  

}