import axios from "axios"
import { baseURL } from "./baseURL"

const getSubs = async (): Promise<any[]> => {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
  };

  //A; acredito que a diferença está na organização e tamanho.