import * as jwt from "jsonwebtoken";



const expiresIn = "10h";
export default class Authenticator {
  
  getData = (token: string): Authentication => {
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
    const result = {
      id: payload.id,
      role: payload.role,
    };
    return result;
  }

  
    generateToken = (input: Authentication): string => {
    const token = jwt.sign(
      {
        id: input.id,
        role: input.role,
      },
      process.env.JWT_KEY as string,
      {
        expiresIn
      }
    );
    return token;
  }

}


type Authentication = {
  id: string;
  role: string;
} 