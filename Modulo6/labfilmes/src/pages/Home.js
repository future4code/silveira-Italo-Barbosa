import React, { useContext } from 'react';
import GlobalStateContext from '../global/GlobalStateContext';
import { Movie } from '../components/movies';
import ScrollableTabsButtonAuto, { ExCard } from "../components/TableCard"
import { Page } from '../components/page';
import { PCard } from '../Styled/PCard';
import { Genrer } from '../components/genres';
import { Headers, Title } from '../Styled/Headers';








const Home = () => {





  const { popular } = useContext(GlobalStateContext);
  const { tokenV } = useContext(GlobalStateContext)
  const { genreId } = useContext(GlobalStateContext)













  const list = popular && popular.filter((movie) => {
    if (genreId.length == 0) {
      return movie
    }
    else {
      for (let n = 0; n < genreId.length; n++) {
        for (let i = 0; i < movie.genre_ids.length; i++) {
          if (genreId[n] === movie.genre_ids[i]) {
            return movie
          }
        }
      }
    }
  }).map(movie => {
    return (
      <div key={movie.id}>
        <Movie movie={movie} />
      </div>
    )
  })





  return (
    <div>
      <Headers>
        <Title><h1>LabFilmes</h1></Title>
        <ScrollableTabsButtonAuto /> <Genrer />
      </Headers>
      <PCard>
        <ExCard>
          {list}
          {tokenV}
        </ExCard>
        <Page />
      </PCard>
    </div>
  )
}

export default Home
