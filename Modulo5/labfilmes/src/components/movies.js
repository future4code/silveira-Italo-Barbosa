import React, { useContext } from 'react';
import GlobalStateContext from '../global/GlobalStateContext';
import { useNavigate } from 'react-router-dom';
import { goToDetail } from "../routes/coordinator";
import {MovieCard, H2, P} from "../Styled/MovieCard"





export const Movie = ({movie}) => {
  
  const { movieId, setMovieId } = useContext(GlobalStateContext)
  
  const Navigate = useNavigate()
 

  const onClickCard = (id) => {
    setMovieId(id);
    goToDetail(Navigate, `/Detail`)
}




    return (
      <MovieCard onClick={()=> onClickCard(movie.id)}>
        <H2>{movie.title}</H2><P>{movie.release_date}</P>
        <img src={"https://image.tmdb.org/t/p/w300" + movie.backdrop_path} alt={movie.path} />
        
      </MovieCard>
    );
  };
