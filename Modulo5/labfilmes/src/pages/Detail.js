import React, {useContext} from 'react';
import { GlobalStateContext } from '../Context/GlobalStateContext';

export default function Detail () {
const { movieDetail } = useContext(GlobalStateContext);


return (
<div>
    <h1>{movieDetail.title}</h1>
    <h4>{movieDetail.release_date}</h4>
    </div>
)

}