import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL, token } from "../constants/url";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
  const [popular, setPopular] = useState([]);
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    getPopular()
    getMovie()

  }, []);



  const getPopular = () => {
    axios.get(`${BASE_URL}/movie/popular`, { headers: { auth: token } })
      .then((response) => {
        setPopular(response.data.movie)
      })
      .catch((error) => console.log(error.message))
  }

  const getMovie = () => {
    axios.get(`${BASE_URL}/discover/movie`, { headers: { auth: token } })
      .then((response) => {
        setMovie(response.data.movie)
      })
      .catch((error) => console.log(error.message))
  };





  const data = {
    popular,
    movie,
    getPopular,
    setPopular,
    getMovie,
    setMovie,

  };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
