import { ProdBusiness } from "../business/ProdBusiness";
import { UserBusiness } from "../business/UserBusiness";
import { PRODUTO_TAG } from "../model/Produto";
import { ProdDatabaseMock } from "./Mocks/ProdDatabaseMock";
import { UserDatabaseMock } from "./Mocks/UserDatabaseMock";
import { HashManagerMock, IdGeneratorMock, TokenGeneratorMock } from "./services/services";
import { ProdInputDTO } from "../types/prodInputDTO";
import { UserInputDTO } from "../types/userInputDTO";




const userBusinessMock = new UserBusiness(
   new IdGeneratorMock(),
   new HashManagerMock(),
   new UserDatabaseMock(),
   new TokenGeneratorMock()
)

const prodBusinessMock = new ProdBusiness(
   new IdGeneratorMock(),
   new ProdDatabaseMock(),
   new TokenGeneratorMock(),
)

test("test createUser", async() =>{
   expect.assertions(0)
   try {
      const user: UserInputDTO = {
         nome: "Italo",
         email: "hawhaw@hotmail.com",
         senha: "1234567"
      }
      await userBusinessMock.signUp(user)

      expect("token")
   } catch (error: any) {
      expect(error.message).toBe(error.sqlMessage || error.message)
   }
})

test("test insertProduct", async() =>{
   expect.assertions(0)
   try {
      const produto: ProdInputDTO = {
          nome: "nome",
          data_criacao: new Date,
          tag: PRODUTO_TAG.MODA,
          token: "shut up"
      }
      await prodBusinessMock.createProduto(produto)
   } catch (error: any) {
      expect(error.message).toBe(error.sqlMessage || error.message)
   }
})

