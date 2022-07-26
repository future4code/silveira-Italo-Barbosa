import { Produto } from "../../model/Produto";




export class ProdDatabaseMock {
    insertProduto = async (produto: Produto) => {
       

    }
  
    public async selectProdutoById(id: string){
        
    }
    
    public async selectProdutoByNome(nome: string){

    }
    public async selectProdutoByTag(tag: string){
        
    }
}