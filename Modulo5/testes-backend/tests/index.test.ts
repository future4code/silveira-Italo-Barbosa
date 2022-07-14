import { UserBusiness }  from "../src/business/UserBusiness";
import { UserDatabase } from "../src/data/UserDatabase";
import { HashMockGenerator } from "./mocks/hashGeneratorMock";
import { IdGeneratorMock } from "./mocks/idGeneratorMock";
import { TokenGeneratorMock } from "./mocks/tokenGeneratorMock";
import { UserDatabaseMock } from "./mocks/userDatabaseMock";

const userBusinessMock = new UserBusiness(
    new IdGeneratorMock(),
    new HashMockGenerator(),
    new TokenGeneratorMock(),
    new UserDatabaseMock() as UserDatabase
)


describe("getUsbyId", () => {
	
   test("Should catch error when id is not registered", async () => {
    expect.assertions(2)

    try {
      await userBusinessMock.getUsbyID("abc")
    } catch (error:any) {
      expect(error.statusCode).toBe(404)
      expect(error.message).toBe("User not found")
    }
  })
}
)
    
	
  test("Should return respective user when id is registered", async () => {
    expect.assertions(2)
    
    try {
      const getUsbyID = jest.fn(
        (id: string) => userBusinessMock.getUsbyID(id)
      )
        
      const result = await getUsbyID("id_mock_admin")

      expect(getUsbyID).toHaveBeenCalledWith("id_mock_admin")
      expect(result).toEqual({
        id: "id_mock_admin",
        name: "astrodev",
        email: "astrodev@gmail.com",
        role: "ADMIN",
      })
    } catch (error) {
      console.log(error.message)
    }
  })

