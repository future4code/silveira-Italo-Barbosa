import axios from "axios"
import { baseURL } from "./baseURL"


async function createN(
    title: string,
    content: string,
    date: number
  ): Promise<void> {
    await axios.put(`${baseURL}/news`, {
      title: title,
      content: content, 
      date: date
    });
  }

  //A: acredito que tenha que ser PUT para adicionar uma entrada e ainda ser possivel verificar.
  