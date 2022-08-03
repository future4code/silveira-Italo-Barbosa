import React, {useState, useEffect} from 'react'
import { url } from '../../constants/Url'
import axios from "axios"

 export const RequerData = (endpoint, initialState) => {
    const [data, setData] = useState(initialState)
    const token = localStorage.getItem("token")

    const getData = () => {

        axios.get(`${url}${endpoint}`, {
                  headers: {auth: token}})
             .then((response) => setData(response.data))
             .catch((error) => alert(error.response.Data.message))
                           }

    useEffect(() => { getData() }, [endpoint])

    return [data, getData]
}


