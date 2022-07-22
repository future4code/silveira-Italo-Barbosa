import React, {useContext} from 'react';
import { DETAIL } from '../components/detail';
import  GlobalStateContext  from '../global/GlobalStateContext';

export default function Detail () {
const { movieDetail } = useContext(GlobalStateContext);

const list = movieDetail && movieDetail.map((movie) => {
    return (<div><DETAIL
      key={movie.id}
      movie={movie}/>
    </div>)
  })

return (
 <div>
 {list}
 </div>
 
)
}