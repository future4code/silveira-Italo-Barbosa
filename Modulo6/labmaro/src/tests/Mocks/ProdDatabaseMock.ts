import { Produto } from "./ProdutoMock";



export class ProdDatabaseMock {
    public async insertProduto(produto: Produto): Promise<void> {

    }
  
    public async selectProdutoById(id: string){
        
    }
    
    public async selectProdutoByNome(nome: string){

    }
    public async selectProdutoByTag(tag: string){
        
    }
}