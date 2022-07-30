export enum PRODUTO_TAG {
    MODA = "MODA",
    BELEZA = "BELEZA",
    CASA = "CASA",
    INFANTIL = "INFANTIL",
    INVERNO = "INVERNO"
}

export class Produto {
    constructor(
        private id: string,
        private nome: string,
        private data_criacao: Date,
        private tag: PRODUTO_TAG,
        private criadorId_produto: string
    ) {}

    getId = () => {
        return this.id
    }

    getNome = () => {
        return this.nome
    }

    getDataCriacao = () => {
        return this.data_criacao
    }

    getTag = () => {
        return this.tag
    }

    getCriadorIdProduto = () => {
        return this.criadorId_produto
    }

    
}