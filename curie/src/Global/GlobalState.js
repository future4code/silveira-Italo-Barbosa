import React, { useState, useEffect } from "react";
import axios from "axios";
import { GlobalStateContext } from "./GlobalStateContext";
import { goToHomePage } from "../../Routes/coordinator";

export default function GlobalState(props) {


  const [nameHeader, setNameHeader] = useState("");
  const [buttonBack, setButtonBack] = useState(false)
  const [isLoading, setIsLoading] = useState(false);

  const signUp = (body, Navigate, clear, setIsLoading) => {
    setIsLoading(true);

    axios.post(`${url}/signup`, body)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        clear();
        setIsLoading(false);
      })
      .catch((error) => {
        alert(error.response.data.message);
        clear();
        setIsLoading(false);
      });
  };

  const login = (event) => {
    event.preventDefault();
    setIsLoading(true);
    axios
      .post(`${url}/login`, form)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
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
