import React, { useContext } from 'react';
import GlobalStateContext from '../global/GlobalStateContext';
import { TV } from '../components/tv';
import ScrollableTabsButtonAuto, { ExCard } from "../components/TableCard"
import { PCard } from '../Styled/PCard';


const Tv = () => {
  const { tv } = useContext(GlobalStateContext)

  const Tv = tv && tv.map((tv) => {
    return (<div><TV key={tv.id} tv={tv} /></div>)
  })



  return (
    <>
      <PCard>
        <h1>TV</h1>
        <ScrollableTabsButtonAuto />
        <ExCard>
          {Tv}
        </ExCard>
      </PCard>
    </>
  )
}

export default Tv