import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL} from "../constants/url";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
  const [popular, setPopular] = useState([]);
  const [tv, setTv] = useState([]);
  const [tokenV, setTokenV] = useState([])
  const [genres, setGenres] = useState([{}])
  

 const request_token = localStorage.getItem("requesttoken")

  useEffect(() => {
    getPopular()
    getTv()
    getTokenV()
    getGenres([{}])
  
  },[]);



  const getTokenV = () => {
    axios.get(`${BASE_URL}/authentication/guest_session/new?api_key=6a875427d321339817527aa3cafc6948`, {crossdomain: true})
      .then((response) => {
       setTokenV(localStorage.setItem("requesttoken", response.data.guest_session_id))
      })
      .catch((error) => console.log(error.message))
      
  }
  const getPopular = () => {
    axios.get(`${BASE_URL}/movie/popular?api_key=6a875427d321339817527aa3cafc6948&${request_token}`, Headers)
      .then((response) => {
        
        setPopular(response.data.results)
        
      })
      .catch((error) => {console.log(error.message)})
      
  }

  const getTv = () => {
    axios.get(`${BASE_URL}/tv/popular?api_key=6a875427d321339817527aa3cafc6948&${request_token}`, Headers)
      .then((response) => {
        setTv(response.data.results)
      })
      .catch((error) => console.log(error.message))
      
  };

  const getGenres = () => {
    axios.get(`${BASE_URL}/genre/movie/list?api_key=6a875427d321339817527aa3cafc6948&${request_token}`, Headers)
      .then((response) => {
        setGenres(response.data.results)
        console.log(response.data)
      })
      .catch((error) => console.log(error.message))
      
  };

  



  const data = {
    popular,
    tv,
    genres,
    getPopular,
    setPopular,
    getTv,
    setTv,
    getGenres,
    setGenres,
    request_token,
    tokenV,
    

  };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
