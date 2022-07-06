import axios from "axios"
import { baseURL } from "./baseURL"



    type user = {
	id: string;
	name: string;
	email: string;
}

const getSubs = async (): Promise<user[]> => {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data.map((response: any) => {
      return {
        id: response.id,
        name: response.name,
        email: response.email,
      };
    });
  };

  //A: não porque já fizemos a tipagem e passamos isso na promise.
  //B: acredito que seja bom, por motivos de conferir oque retorna na promise.

