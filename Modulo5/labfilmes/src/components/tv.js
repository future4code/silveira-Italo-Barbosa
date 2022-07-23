import React from "react";
import { TvCard } from "./TvCard";

export const TV = ({tv}) => {
    return (
      <TvCard>
        <h5>{tv.name}</h5> <h5>Popularity:{tv.popularity}</h5>
        <img src={"https://image.tmdb.org/t/p/w300" + tv.backdrop_path} alt={tv.path} />
      </TvCard>
    );
  };