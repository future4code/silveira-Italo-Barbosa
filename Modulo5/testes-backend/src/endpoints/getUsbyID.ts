import  { UserDatabase } from "../data/UserDatabase"


export class UserController {
    constructor(
     private userDatabase: UserDatabase,
  
    ){}

public async getUsbyId(id: string) {
    const user = await this.userDatabase.getUserById(id);

    if (!user) {
      throw new Error("User???? not found!!");
    }

    return {
      id: user.getId(),
      name: user.getName(),
      email: user.getEmail(),
      role: user.getRole(),
    };
  }
}