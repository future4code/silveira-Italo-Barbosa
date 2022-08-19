import { Produto } from "../model/Produto";
import { BaseDatabase } from "./BaseDatabase";

export class ProdDatabase extends BaseDatabase {

    private static TABLE_NAME = "lamaro_Prod"
    
    insertProduto = async (newProd: Produto) => {
        try {
            await BaseDatabase.connection()
                .insert({
                    id: newProd.getId(),
                    nome: newProd.getNome(),
                    data_criacao: newProd.getDataCriacao(),
                    tag: newProd.getTag(),
                    criadorId_produto: newProd.getCriadorIdProduto()
                })
                .into(ProdDatabase.TABLE_NAME)

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    selectProdutoById = async (produtoId: string) => {
        try {
            const result = await BaseDatabase.connection()
                .select("*")
                .from(ProdDatabase.TABLE_NAME)
                .where("id", produtoId)

            return result[0]
            
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)  
        }
    }

    selectProdutoByNome = async (produtoNome: string) => {
        try {
            const result = await BaseDatabase.connection()
                .select("*")
                .from(ProdDatabase.TABLE_NAME)
                .where("nome", produtoNome)

            return result[0]
            
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)  
        }
    }

    selectProdutoByTag = async (produtoTag: string) => {
        try {
            const result = await BaseDatabase.connection()
                .select("*")
                .from(ProdDatabase.TABLE_NAME)
                .where("tag", produtoTag)

            return result[0]
            
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)  
        }
    }
}