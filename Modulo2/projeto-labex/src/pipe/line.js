


export const goToHome = (Navigate) => {
    Navigate("/")
}

export const goToViagens = (Navigate) => {
    Navigate("/Viagens")
}

export const goToFormulario = (Navigate) => {
    Navigate("/formulario")
}

export const goToLogin = (Navigate) => {
    Navigate("/Login")
}

export const goToAdminPage = (Navigate) => {
    Navigate("/AdminPage")
}

export const goToCriarViagens = (Navigate) => {
    Navigate("/CriarViagens")
}

export const goToViagensDetail = (Navigate, id) => {
    Navigate(`/ViagensDetail/${id}`)
}
