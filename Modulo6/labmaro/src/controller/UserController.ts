import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { loginInputDTO } from "../types/loginInputDTO";
import { UserInputDTO } from "../types/userInputDTO";

export class UserController {
    constructor(
        private userBusiness: UserBusiness
    ) { }

    signUp = async (request: Request, response: Response) => {
        try {

            const { nome, email, senha } = request.body

            const user: UserInputDTO = {
                nome,
                email,
                senha
            }

            const token = await this.userBusiness.signUp(user)

            response.status(201).send({ token })
        } catch (error: any) {
            if (response.statusCode === 200) {
                response.status(500).send({ message: error.message })
            } else {
                response.status(response.statusCode).send({ message: error.sqlMessage || error.message })
            }
        }

    }

    login = async (request: Request, response: Response) => {
        try {

            const { email, senha } = request.body

            const user: loginInputDTO = {
                email,
                senha
            }

            const token = await this.userBusiness.login(user)

            response.status(200).send({ token })
            
        } catch (error: any) {
            if (response.statusCode === 200) {
                response.status(500).send({ message: error.message })
            } else {
                response.status(response.statusCode).send({ message: error.sqlMessage || error.message })
            }
        }
    }
}