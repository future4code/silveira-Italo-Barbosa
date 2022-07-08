import { UserDatabase } from "../data/mySQL/UserDatabase";
import { UserType } from "../model/UserType";
import { IdGenerator } from "../services/generateId";
import { hashManager } from "../services/hashManager";
import { User } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { LoginType } from "../model/LoginType";



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



      if(!name || name.length<3){
        throw new Error("Invalid name")
      }
      if (!email || email.indexOf("@") === -1) {
        throw new Error("Invalid email");
      }
      if(!password || password.length<6){
        throw new Error("Invalid password")
      }
    

      const id = this.idgenerator.generateId()
      const HashPassword = await this.hash.hash(password)
      const t = {name, id, email}
      const token: string = this.authenticator.generateToken(
        t
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

  public login = async  (user: LoginType) =>{
 
    try {
      const {email, password} = user

      if(!email || password){
        throw new Error("null password or email")
      }

      const userdata:any = await this.userDatabase.captUserEmail(email)

      if(!userdata){
        throw new Error("Email incorrect")
      }

      const comparePassword = this.hash.compare(password, userdata.getPassword())

      if(!comparePassword){
        throw new Error("Password incorrect")
      }

     const token = this.authenticator.generateToken({id: userdata.getId(), name: userdata.getName(), email: userdata.getEmail()})

     return token

    } catch (error:any) {
      throw new Error(error.message);
    }
  }
}
