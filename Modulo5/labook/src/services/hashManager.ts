import * as bcrypt from "bcryptjs";

export class hashManager {
async  hash (p: string): Promise<string> {
    const rounds = Number(process.env.BCRYPT_COST);
    const salt = await bcrypt.genSalt(rounds);
    return bcrypt.hash(p, salt)
  }
 compare = async(p: string, hash: string): Promise<boolean> => {
    return bcrypt.compare(p, hash);
  } 
} 