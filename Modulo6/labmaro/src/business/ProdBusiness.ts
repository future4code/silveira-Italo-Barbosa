import { ProdDatabase } from "../data/ProdDatabase";
import { Produto, PRODUTO_TAG } from "../model/Produto";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { ProdInputDTO } from "../types/prodInputDTO";

export class ProdBusiness {

    constructor(
        private idGenerator: IdGenerator,
        private prodDatabase: ProdDatabase,
        private authenticator: Authenticator
    ){}
    
    createProduto = async (produto: ProdInputDTO) => {
        try {

            const { token, nome, tag } = produto
            let { data_criacao } = produto

            if (!token) {
                throw new Error("Insira um token porfavor!")
            }

            const userTokenData = this.authenticator.getTokenData(token)

            if (!userTokenData) {
                throw new Error("Token inválido!")
            }

            if ( !nome || !tag ){
                throw new Error("preencha todos os campos")
            }

            if (tag !== PRODUTO_TAG.CASA && tag !== PRODUTO_TAG.MODA && tag !== PRODUTO_TAG.BELEZA && tag !== PRODUTO_TAG.INFANTIL && tag !== PRODUTO_TAG.INVERNO) {
                throw new Error("Tag inválida")
            }

            if (!data_criacao) {
                data_criacao = new Date()
            }

            const produtoId = this.idGenerator.generate()

            const newProduto = new Produto(
                produtoId,
                nome,
                data_criacao,
                tag,
                userTokenData.id  
            )

            await this.prodDatabase.insertProduto(newProduto)

            return newProduto
            
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    getProdutoById = async (produtoId: string, token: string) => {
        try {

            if (!token) {
                throw new Error("Insira um token porfavor!")
            }

            if (!produtoId) {
                throw new Error("Insira um id correto!")
            }

            const userTokenData = this.authenticator.getTokenData(token)

            if (!userTokenData) {
                throw new Error("Token inválido!")
            }

            const produto = await this.prodDatabase.selectProdutoById(produtoId)

            if (!produto) {
                throw new Error("Não existe nenhum produto com esse ID!")
            }

            return produto
            
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message) 
        }
    }

    getProdutoByNome = async (produtoNome: string, token: string) => {
        try {

            if (!token) {
                throw new Error("Insira um token porfavor!")
            }

            if (!produtoNome) {
                throw new Error("Insira um nome correto!")
            }

            const userTokenData = this.authenticator.getTokenData(token)

            if (!userTokenData) {
                throw new Error("Token inválido!")
            }

            const produto = await this.prodDatabase.selectProdutoByNome(produtoNome)

            if (!produto) {
                throw new Error("Não existe nenhum produto com esse Nome!")
            }

            return produto
            
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message) 
        }
    }

    getProdutoByTag = async (produtoTag: string, token: string) => {
        try {

            if (!token) {
                throw new Error("Insira um token porfavor!")
            }

            if (!produtoTag) {
                throw new Error("Insira uma tag correto!")
            }

            const userTokenData = this.authenticator.getTokenData(token)

            if (!userTokenData) {
                throw new Error("Token inválido!")
            }

            const produto = await this.prodDatabase.selectProdutoByTag(produtoTag)

            if (!produto) {
                throw new Error("Não existe nenhum produto com essa Tag!")
            }

            return produto
            
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message) 
        }
    }
}