import React from "react";


export const DETAIL = ({movieDetail}) => {
    return (
      <div>
        <h5>{movieDetail.title}</h5> <h5>{movieDetail.overview}</h5>
        <img src={"https://image.tmdb.org/t/p/w500" + movieDetail.backdrop_path} alt={movieDetail.path} />
        <h5>{movieDetail.overview}</h5>
      </div>
    );
  };