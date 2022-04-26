import { useState, useEffect } from "react"
import { URL } from './encam'
import axios from "axios"

export const requerData = (endpoint, initialState) => {
    const [data, setData] = useState(initialState)

    const getDat = () => {
        axios.get(`${URL}${endpoint}`, {
            headers: {
                auth: localStorage.getItem("token")
            }
        })
        .then((response) => setData(response.data))
        .catch((error) => alert(error.response.Data.message))
    }

    useEffect(() => {
        getDat()
    }, [endpoint])

    return [data, getDat]
}

export const useFormu = (initialState) => {
    const [formu, setFormu] = useState(initialState)

    const onChange = (event) => {
        const { name, value } = event.target
        setFormu({ ...formu, [name]: value })
    }

    const clear = () => {
        setFormu(initialState)
    }

    return { formu, onChange, clear }
}


