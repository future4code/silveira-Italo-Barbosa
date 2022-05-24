import { useState, useEffect } from "react"
import { URL } from './encam'
import axios from "axios"

const RequerData = (endpoint, initialState) => {
    const [data, setData] = useState(initialState)

    const getData = () => {
        
        axios.get(`${URL}${endpoint}`, {
                  headers: {auth: localStorage.getItem("token")}})
             .then((response) => setData(response.data))
             .catch((error) => alert(error.response.Data.message))
                           }

    useEffect(() => { getData() }, [endpoint])

    return [data, getData]
}



export default RequerData

