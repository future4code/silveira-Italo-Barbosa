import axios from "axios";
import { url } from "../Constants/Url";

export const getProfile = (setUser) => {
    axios.get(`${url}/profile`
    ).then((res) => {
        setUser(res.data.user)
    }).catch((err) => {
        console.log(err.response)
        alert("Ocorreu um erro, por favor tente mais tarde.")
    })
}

export const getOrdersHistory = (setHistory) => {
    axios.get(`${url}/orders/history`
    ).then((res) => {
        setHistory(res.data.orders)
    }).catch((err) => {
        console.log(err.response)
        alert("Ocorreu um erro, por favor tente mais tarde.")
    })
}

export const getEditAddress = (setEditAddress, setForm) => {
    axios.get(`${url}/profile/address`
    ).then((res) => {
        setEditAddress(res.data)
        setForm(res.data.address)
    }).catch((err) => {
        console.log(err.response)
        alert("Ocorreu um erro, por favor tente mais tarde.")
    })
}

export const updateProfile = (form, setForm, setPersonalFormInputs, setUser, cleanFields) => {
    axios.put(`${url}/profile`, form
    ).then((res) => {
        setForm(setPersonalFormInputs(res.data))
        cleanFields()
        setUser(setPersonalFormInputs(res.data))
    }).catch((err) => {
        console.log(err.response)
    })
}
