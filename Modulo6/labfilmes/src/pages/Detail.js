import React, { useContext } from 'react';
import GlobalStateContext from '../global/GlobalStateContext';
import { PCard } from '../Styled/PCard';
import { useNavigate } from 'react-router-dom';
import { goToHome } from "../routes/coordinator"
import Button from '@mui/material/Button';


export default function Detail() {
  const { movie } = useContext(GlobalStateContext)
  const { review } = useContext(GlobalStateContext)



  const converter = (minutos) => {
    const horas = Math.floor(minutos / 60)
    const min = minutos % 60
    const textoHoras = (`00${horas}`).slice(-2)
    const textoMinutos = (`00${min}`).slice(-2)

    return `${textoHoras}:${textoMinutos}`
  }

  const time = converter(movie.runtime)


  

  const Navigate = useNavigate()

  const onClickHome = () => {
    goToHome(Navigate);
  };


  

  return (
    <PCard>
      <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} />
      <h2>{movie.title}</h2>
      <p>Release: {movie.release_date}</p>
      <p>time: {time}</p>
      <h5>Sinopse</h5>
      <p>{movie.overview}</p>
      <p>{review}</p>

      <Button variant="contained" label="Home" onClick={() => onClickHome(goToHome)}><h3>Return to home</h3></Button>
    </PCard>

  )


}