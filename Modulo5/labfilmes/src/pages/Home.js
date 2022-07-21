import React, { useContext } from 'react';
import GlobalStateContext from '../global/GlobalStateContext';
import {Movie} from '../components/movies';
import {goToTv} from "../routes/coordinator"
import { useNavigate } from 'react-router-dom';




    




const Home = () => {

  
  
  const [value, setValue] = React.useState(0);

  const {popular} = useContext(GlobalStateContext);
  const {tokenV} = useContext(GlobalStateContext)
  const {genres} = useContext(GlobalStateContext)
  const {setGenres} = useContext(GlobalStateContext)
 
  

  const Navigate = useNavigate()


  const genresFilter = ( name ) => { 
    if( name === genres.name) { 
        setGenres({})
    }
    else{
        setGenres(name)
    } 
  } 

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const onClickCard = () => {
    goToTv(Navigate);
};

const list = popular && popular.map((movie) => {
  return (<div><Movie 
    key={movie.id} 
    movie={movie}/></div>)})

const listGenres = genres && genres.map((genres) =>{
  return (<div>
    genresId={genres.ids}
    genresName={genres.name}
 
  </div>)
})



    return(
      <>
        <div>
          
        <button onClick={()=>genresFilter("Action")} onChange={handleChange}><h5>Action</h5></button>
        <div>{listGenres}</div>
          <h1>Movies</h1>
          <div>
            {list}
            {tokenV}
          </div>
          <button onClick={()=> onClickCard(goToTv)}><h5>TV</h5></button>
        </div>
      </>
    )
}

export default Home
