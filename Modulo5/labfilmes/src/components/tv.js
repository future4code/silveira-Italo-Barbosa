import React from "react";

export const TV = ({tv}) => {
    return (
      <div>
        <h5>{tv.name}</h5> <h5>Popularity:{tv.popularity}</h5>
        <img src={"https://image.tmdb.org/t/p/w500" + tv.backdrop_path} alt={tv.path} />
      </div>
    );
  };