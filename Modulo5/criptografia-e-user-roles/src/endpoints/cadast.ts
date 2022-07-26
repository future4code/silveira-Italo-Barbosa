import {Request, Response} from "express"



export default async function cadast (request: Request, response: Response): Promise<void> {
    try {
      const userData = {
        email: request.body.email,
        password: request.body.password,
        role: request.body.role
      }
    
      const id = generate()
  
      const hashPassword = await hash(userData.password)
  
      await createUser(id, userData.email, hashPassword, userData.role)
  
      const token = generateToken({
        id,
        role: userData.role
      })
  
      response.status(200).send({
        token
      })
    } catch (error:any) {
      response.status(400).send({
        message: error.message
      })
    }
  };