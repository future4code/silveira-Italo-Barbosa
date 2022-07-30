import { PRODUTO_TAG } from "../model/Produto"

export type ProdInputDTO = {
    nome: string
    data_criacao: Date
    tag: PRODUTO_TAG
    token: string
}