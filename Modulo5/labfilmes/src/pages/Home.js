import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import GlobalStateContext from '../global/GlobalStateContext';
import {Movie} from '../components/movies';



    




const Home = () => {

  const { popular } = useContext(GlobalStateContext);
    const Navigate = useNavigate()

   




    return(
      <>
        <div>
          <h1>Movies</h1>
          <div>
            {popular.map((movie) => {
              return <Movie key={movie.id} movie={movie} />
            })}
          </div>

        </div>
      </>
    )
}

export default Home
