import axios from "axios"
import { baseURL } from "./baseURL"


const sendNotifi = async (
    users: user[],
    message: string
  ): Promise<void> => {
  
      try {
        const promises = users.map(user =>{
          return axios.post(`${baseURL}/notifications`, {
            subscriberId: user.id,
            message: message,
          })
        })
      
        await Promise.all(promises);
  
      } catch {
          console.log("Error!!!");
      }
  };

  //A: retorna uma promise com varias promises que estão dentro eu diria assim.
  //B; acredito que a vantagem esteja em verificação e na forma que o resultado da requisição é tratado.