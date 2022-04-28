import axios from "axios"
import { goToAdminPage, goToLogin } from '../pipe/line'


export const URL = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/ItaloSouza-Silveira"


export const login = (body, Navigate) => {
    axios.post(`${URL}/login`, body)
         .then((response) => {
              localStorage.setItem("token", response.data.token)
              goToAdminPage(Navigate)
                             })
         .catch((error) => alert(error.response.data.message))
         console.log("oi")
                                         }

export const logout = (Navigate) => {
               localStorage.removeItem("token")
             goToLogin(Navigate)
                                    }

export const encamA = (body, tripId, clear) => {
    axios.post(`${URL}/trips/${tripId}/apply`, body)
         .then(() => {
            alert("Enviado com sucesso")
            clear()
        })
         .catch((error) => alert(error.response.message))
}

export const CriarV = (body, clear) => {
    axios.post(`${URL}/trips`, body, {
        headers: {auth: localStorage.getItem("token")}
    })
    .then(() => {
        alert("Viagem adicionada")
        clear()
    })
    .catch((error) => alert(error.response.data.message))
}



export const escoCobaia = (tripId, candidateId, decision, getTripDetails) => {
    const body = {
        approve: decision
    }

    axios.put(`${URL}/trips/${tripId}/candidates/${candidateId}/decide`, body, {
        headers: {auth: localStorage.getItem("token")}
    })
    .then(() => {
        alert("Decisão registrada")
        getTripDetails()
    })
    .catch((error) => alert(error.response.data.message))
}


export const deletV = (id, getTrips) => {
    axios.delete(`${URL}/trips/${id}`, {
        headers: { auth: localStorage.getItem("token") }
    })
    .then(() => {
        alert("Viagem deletada com sucesso!")
        getTrips()
    })
    .catch((error) => alert(error.response.data.message))
}
