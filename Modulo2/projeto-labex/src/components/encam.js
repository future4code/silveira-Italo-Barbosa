import axios from "axios"


export const URL = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/Italo-souza-silveira"


export const login = (body, history) => {
    axios.post(`${URL}/login`, body)
        .then((response) => {
            localStorage.setItem("token", response.data.token)
            goToAdminPage(history)
        })
        .catch((error) => alert(error.response.data.message))
}

export const logout = (history) => {
    localStorage.removeItem("token")
    goToLoginPage(history)
}

export const encamA = (body, tripId, clear) => {
    axios.post(`${URL}/trips/${tripId}/apply`, body)
        .then(() => {
            alert("Enviado com sucesso")
            clear()
        })
        .catch((error) => alert(error.response.message))
}

export const criaV = (body, clear) => {
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
