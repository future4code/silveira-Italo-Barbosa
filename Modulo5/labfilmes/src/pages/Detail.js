import React, { useContext } from 'react';
import GlobalStateContext from '../global/GlobalStateContext';
import { PCard } from '../Styled/PCard';

export default function Detail() {
  const { movie } = useContext(GlobalStateContext);
  
  const converter = (minutos) => {
    const horas = Math.floor(minutos/ 60);          
    const min = minutos % 60;
    const textoHoras = (`00${horas}`).slice(-2);
    const textoMinutos = (`00${min}`).slice(-2);
    
    return `${textoHoras }:${textoMinutos}`;
  };
  
  const time = converter(movie.runtime)

  return (
    <PCard>
      <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}/>
      <h2>{movie.title}</h2>
      <p>Release: {movie.release_date}</p>
      <p>time: {time}</p>
      <h5>Sinopse</h5>
      <p>{movie.overview}</p>
    </PCard>
  )


}