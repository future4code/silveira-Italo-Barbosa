import { Request, Response } from "express";
import { ProdBusiness } from "../business/ProdBusiness";
import { UserBusiness } from "../business/UserBusiness";
import { ProdInputDTO } from "../types/prodInputDTO";

export class ProdController {

    constructor(
        private prodBusiness: ProdBusiness
    ) { }
    
    createProd = async (request: Request, response: Response) => {
        try {

            const token = request.headers.authorization as string
            const {nome, data_criacao, tag } = request.body

            const produto: ProdInputDTO = {
                nome,
                data_criacao,
                tag,
                token
            }

            const newProduto = await this.prodBusiness.createProduto(produto)

            response.status(201).send({ message: "Produto criado", newProduto})
            
        } catch (error: any) {
            if (response.statusCode === 200) {
                response.status(500).send({ message: error.message })
            } else {
                response.status(response.statusCode).send({ message: error.sqlMessage || error.message })
            }
        }
    }

    getProdutoById = async (request: Request, response: Response) => {
        try {

            const token = request.headers.authorization as string
            const produtoId = request.params.id

            const produto = await this.prodBusiness.getProdutoById(produtoId, token)

            response.status(200).send({ produto })
            
        } catch (error: any) {
            if (response.statusCode === 200) {
                response.status(500).send({ message: error.message })
            } else {
                response.status(response.statusCode).send({ message: error.sqlMessage || error.message })
            }
        }
    }

    getProdutoByNome = async (request: Request, response: Response) => {
        try {

            const token = request.headers.authorization as string
            const produtoNome = request.body.nome

            const produto = await this.prodBusiness.getProdutoByNome(produtoNome, token)

            response.status(200).send({ produto })
            
        } catch (error: any) {
            if (response.statusCode === 200) {
                response.status(500).send({ message: error.message })
            } else {
                response.status(response.statusCode).send({ message: error.sqlMessage || error.message })
            }
        }
    }

    getProdutoByTag = async (request: Request, response: Response) => {
        try {

            const token = request.headers.authorization as string
            const produtoTag = request.body.tag

            const produto = await this.prodBusiness.getProdutoByTag(produtoTag, token)

            response.status(200).send({ produto })
            
        } catch (error: any) {
            if (response.statusCode === 200) {
                response.status(500).send({ message: error.message })
            } else {
                response.status(response.statusCode).send({ message: error.sqlMessage || error.message })
            }
        }
    }
}