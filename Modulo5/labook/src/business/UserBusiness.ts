import { UserDatabase } from "../data/mySQL/UserDatabase";
import { CustomError, InvalidEmail, InvalidName } from "../error/customError";
import { UserType } from "../model/UserType";
import { IdGenerator } from "../services/generateId";
import { hashManager } from "../services/hashManager";
import { User } from "../model/User";
import { Authenticator } from "../services/Authenticator";



export class UserBusiness {
  constructor(
   private userDatabase: UserDatabase,
   private idgenerator: IdGenerator,
   private hash: hashManager,
   private authenticator: Authenticator
  ){}
  public signUp = async  (user: UserType) => {
    try {
      const { name, email, password } = user

    

      const id = this.idgenerator.generateId()
      const HashPassword = await this.hash.hash(password)

      const token: string = this.authenticator.generateToken(
        id,
        name,
        email
      )

      const users = new User(
        id,
        name,
        email,
        HashPassword,
      );
      
      await this.userDatabase.signUp(users);
      return token

    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}
