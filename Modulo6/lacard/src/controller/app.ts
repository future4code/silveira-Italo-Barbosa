
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";

dotenv.config();

export const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3005, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
