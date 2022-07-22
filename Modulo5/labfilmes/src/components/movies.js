import React from "react";
import {MovieCard} from "../components/MovieCard"
import { useNavigate } from 'react-router-dom';
import { goToDetail } from "../routes/coordinator";






export const Movie = ({movie}) => {
  
  const Navigate = useNavigate()
 

  const onClickCard = (id) => {
    goToDetail(Navigate, id);
};




    return (
      <button className="MovieCard" onClick={()=> onClickCard(movie.id)}>
        <h5>{movie.title}</h5>
        <>{movie.id}</>
        <img src={"https://image.tmdb.org/t/p/w300" + movie.backdrop_path} alt={movie.path} />
      </button>
    );
  };
