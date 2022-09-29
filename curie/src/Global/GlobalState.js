import React, { useState, useEffect } from "react";
import axios from "axios";
import { GlobalStateContext } from "./GlobalStateContext";
import { goToHomePage } from "../Routes/Coordinator";
import { Url } from '../Constant/Url'
import { useNavigate } from "react-router-dom";


export default function GlobalState(props) {


  const Navigate = useNavigate()

  const [nameHeader, setNameHeader] = useState("");
  const [buttonBack, setButtonBack] = useState(false)
  const [isLoading, setIsLoading] = useState(false);
  

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

 

  const logout = () => {
    localStorage.removeItem("token");
    goToHomePage(Navigate);
  };


  const data = {
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
