import * as bcrypt from 'bcryptjs';
import dotenv from 'dotenv'

dotenv.config()

export class hashMa {
  async  hash (s: string): Promise<string> {
      const rounds = Number(process.env.BCRYPT_COST);
      const salt = await bcrypt.genSalt(rounds);
      return bcrypt.hash(s, salt)
    }
   compare = async(s: string, hash: string): Promise<boolean> => {
      return bcrypt.compare(s, hash);
    } 
  } 