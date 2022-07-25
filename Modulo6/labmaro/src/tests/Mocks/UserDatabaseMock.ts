import { User } from "../../model/User";


export class UserDatabaseMock {
    public async signUp(user: User): Promise<void> {

    }
  
    public async selectUserByEmail(email: string){
        
    }    
}

