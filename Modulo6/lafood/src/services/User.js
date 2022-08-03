import axios from "axios";
import { url } from "../Constants/Url";
import { goToEndereco, goToHomePage, goToLogin } from "../Routes/coordinator";

const headers = {
    headers: {
        auth: localStorage.getItem("token"),
    }
}

export const login = (body, Navigate) => {
    axios.post(`${url}/login`, body)
    .then((response) => {
        localStorage.setItem("token", response.data.token);
        goToHomePage(Navigate);
    })
    .catch((error) => alert(error.response.data.message));
};

export const signUp = (body, Navigate, clear, setIsLoading) => {
    setIsLoading(true);

    axios.post(`${url}/signup`, body)
    .then((response) => {
        localStorage.setItem("token", response.data.token);
        goToEndereco(Navigate);
        clear();
        setIsLoading(false);
    })
    .catch((error) => {
        alert(error.response.data.message);
        clear();
        setIsLoading(false);
    });
};

export const logout = (Navigate) => {
    localStorage.removeItem("token");
    goToLogin(Navigate);
};

export const addAdress = (body, Navigate, clear, setIsLoading) => {
    axios.put(`${url}/address`, body, headers)
    .then((response) => {
        localStorage.setItem("token", response.data.token);
        goToHomePage(Navigate);
        clear();
        setIsLoading(false);
    })
    .catch((error) => {
        alert(error.response.data.message);
        clear();
        setIsLoading(false);
    });
};