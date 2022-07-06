import axios from "axios"
import { baseURL } from "./baseURL"


const sendNotif= async (
    users: user[],
    message: string
  ): Promise<void> => {
  
    try {
          for (const user of users) {
          await axios.post(`${baseURL}/notifications`, {
            subscriberId: user.id,
            message
          });
        }
  
        console.log("notificações enviadas");
      } catch {
          console.log("Error!!!");
      }
  };

  