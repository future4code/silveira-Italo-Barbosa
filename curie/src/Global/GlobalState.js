import React, { useState, useEffect } from "react";
import axios from "axios";
import { GlobalStateContext } from "./GlobalStateContext";
import { goToHomePage } from "../Routes/Coordinator";
import { useNavigate } from "react-router-dom";
import useForm from "../Hooks/Form"
import { Url } from '../Constant/Url'


export default function GlobalState(props) {


  const navigate = useNavigate();

  const [nameHeader, setNameHeader] = useState("");
  const [buttonBack, setButtonBack] = useState(false)
  const [isLoading, setIsLoading] = useState(false);
  const { form, cleanField } = useForm()

  const signUp = (body, cleanField, setIsLoading) => {
    setIsLoading(true);

    axios.post(`${Url}/signup`, body)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        cleanField();
        setIsLoading(false);
      })
      .catch((error) => {
        alert(error.response.data.message);
        cleanField();
        setIsLoading(false);
      });
  };

  const login = (event) => {
    event.preventDefault();
    setIsLoading(true);
    axios
      .post(`${Url}/login`, form)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        goToHomePage(navigate);
        cleanField();
        setIsLoading(false)
      })
      .catch((error) => {
        alert(error);
        setIsLoading(false)
      });
  };

  const logout = (Navigate) => {
    localStorage.removeItem("token");
    goToHomePage(Navigate);
  };


  const data = {
    login,
    signUp,
    logout,
    nameHeader,
    setNameHeader,
    buttonBack,
    setButtonBack,
    isLoading,
    setIsLoading,
  }

  return (
    <GlobalStateContext.Provider
      value={{ data }}
    >
      {props.children}
    </GlobalStateContext.Provider>
  );
}
