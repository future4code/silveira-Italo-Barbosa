import React, { useContext } from 'react';
import GlobalStateContext from '../global/GlobalStateContext';
import { Movie } from '../components/movies';
import ScrollableTabsButtonAuto, { ExCard } from "../components/TableCard"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import blue from '@mui/material/colors/blue';
import grey from '@mui/material/colors/grey';








const Home = () => {





  const { popular } = useContext(GlobalStateContext);
  const { tokenV } = useContext(GlobalStateContext)
  const { genres } = useContext(GlobalStateContext)
  const { setGenres } = useContext(GlobalStateContext)



 


  const genresFilter = (name) => {
    if (name === genres.name) {
      setGenres({})
    }
    else {
      setGenres(name)
    }
  }

  const theme = createTheme({
    palette: {
      primary: {
        main: blue[500],
      },
      secondary: {
        main: grey[500],
      },
    },
  });


  const list = popular && popular.map((movie) => {
    return (<div><Movie
      key={movie.id}
      movie={movie}/>
    </div>)
  })

  const listGenres = genres && genres.map((genres) => {
    return (<div>
      genresId={genres.ids}
      genresName={genres.name}
    </div>)
  })



  return (
    <ThemeProvider theme={theme}>
      <div>
        <h1>Movies</h1>
        <ScrollableTabsButtonAuto />
          {listGenres} 
        <ExCard>
          {list}
          {tokenV}
        </ExCard>
      </div>
    </ThemeProvider>
  )
}

export default Home
