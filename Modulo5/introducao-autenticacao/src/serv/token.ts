import * as jwt from "jsonwebtoken";
import { Authentication } from "../data/auth";

  const expiresIn = "1h";
 export const generateToken(input: Authentication): string {
    const token = jwt.sign(
      {
        id: input.id,
      },
      process.env.JWT_KEY as string,
      {
        expiresIn
      }
    );
    return token;
  }


 export const getData = (token: string): Authentication => {
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
    const result = {
      id: payload.id,
    };
    return result;
  };