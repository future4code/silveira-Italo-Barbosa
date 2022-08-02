import * as jwt from "jsonwebtoken";
import { Authentication } from "../model/Authentication";



const expiresIn = "10h";
export class Authenticator {

  getData = (token: string): Authentication => {
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
    const result = {
      id: payload.id,
      email: payload.email,
      name: payload.name,
    };
    return result;
  }


    generateToken = (input: Authentication): string => {
    const token = jwt.sign(
      {
        id: input.id,
        email: input.email,
        name: input.name,
      },
      process.env.JWT_KEY as string,
      {
        expiresIn
      }
    );
    return token;
  }

}


