import { Request, Response } from "express";



export default async function login(request: Request, response: Response):Promise<void> {
    try {
      if (!request.body.email || request.body.email.indexOf("@") === -1) {
        throw new Error("error email");
      }
  
      const userData = {
        email: request.body.email,
        password: request.body.password,
      };
  
      const user = await getUserEmail(userData.email);
  
      const compareResult = await compare(
        userData.password,
        user.password
      );
  
      if (!compareResult) {
        throw new Error("error password");
      }
  
      const token = generateToken({
        id: user.id,
        role: user.role    
          })
  
      response.status(200).send({
        token
      });
    } catch (error:any) {
      response.status(400).send({
        message: error.message
      })
    }
  };