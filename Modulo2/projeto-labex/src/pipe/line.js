import {useNavigate} from "react-router-dom"


export const goToHome = (Navigate) => {
    Navigate("/")
}

export const goToViagens = (Navigate) => {
    Navigate("/Viagens")
}

export const goToApplicationFormPage = (Navigate) => {
    Navigate("/trips/application")
}

export const goToLogin = (Navigate) => {
    Navigate("/login")
}

export const goToAdminPage = (Navigate) => {
    Navigate("/admin/trips/list")
}

export const goToCreateTripPage = (Navigate) => {
    Navigate("/admin/trips/create")
}

export const goToViagemDetail = (Navigate, id) => {
    Navigate(`/admin/trips/${id}`)
}
