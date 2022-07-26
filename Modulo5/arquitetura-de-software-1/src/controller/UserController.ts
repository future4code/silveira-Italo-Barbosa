import { Request, Response } from "express";
import UserBusiness from "../Bussines/UserBusiness";
import {Input } from "../types/user";

class UserController {

    async signUp(request: Request, response: Response) {
        try {
            const { name, email, password, role } = request.body

            const newUser: Input = {
                name,
                email,
                password,
                role
            }

            
            const userBussines = new UserBusiness()

            
            const token = await userBussines.signUp(newUser)

            response.status(201).send({ message: "usuario presente", token })

        } catch (error: any) {
            response.status(500).send({ message: error.message })
        }
    }

    async login(request: Request, response: Response) {

        try {

            const login = {
                email: request.body.email,
                password: request.body.password
            };

         const userbusiness = new UserBusiness
            const token = await userbusiness.login(login);

            response.status(200).send({ token });

        } catch (error:any) {
            response.status(400).send({ error: error.message });
        }
        
    }

    async getAll(request: Request, response: Response) {

		
        try {

            const token = request.headers.authorization!;
            const users = await UserBusiness.get(token);

            response.send(users).status(200);

        } catch (error:any) {
            response.send({ message: error.message }).status(error.status);
        }
    }
}

export default UserController