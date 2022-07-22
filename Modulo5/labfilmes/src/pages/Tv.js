import React, { useContext } from 'react';
import GlobalStateContext from '../global/GlobalStateContext';
import {TV} from '../components/tv';
import ScrollableTabsButtonAuto, {ExCard} from "../components/TableCard"


const Tv = () => {
const {tv} = useContext(GlobalStateContext)

    const Tv = tv && tv.map((tv) => {
        return (<div><TV key={tv.id} tv={tv}/></div>)})



return(
    <>
      <div>
        <h1>TV</h1>
        <ScrollableTabsButtonAuto/>
        <ExCard>
          {Tv}
          
        </ExCard>

      </div>
    </>
  )
}

export default Tv