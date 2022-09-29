// export const goToPage = (navigate, pageIndex) => {    
//     navigate(pageIndex); 
// }

export const goToHomePage = (navigate) => {
    navigate('/');
}

export const goBack = (navigate) => {
    navigate(-1);
}

export const goToLogin = (navigate) => {
    navigate("/login");
}

export const CadastroPage = (navigate) => {
    navigate("/cadastro")
}