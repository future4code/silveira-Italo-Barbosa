import axios from "axios"
import { baseURL } from "./baseURL"

async function getSubs(): Promise<any[]> {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
  };


//A: endpoint GET.
//B: com promiesses indicando que é any [].