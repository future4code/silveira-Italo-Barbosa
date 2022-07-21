import React from "react";
import {MovieCard} from "../components/MovieCard"




export const Movie = ({movie}) => {
    return (
      <button class={MovieCard}>
        <h5>{movie.title}</h5>
        <img src={"https://image.tmdb.org/t/p/w300" + movie.backdrop_path} alt={movie.path} />
      </button>
    );
  };
