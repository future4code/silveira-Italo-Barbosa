import axios from "axios";
import React, {useState, useEffect} from "react";
import PokeCard from "./components/PokeCard";

function App () {
  
 const [pokeList, setpokelist] = useState([])
 const [pokeName, setPokeName] = useState("")
 

const getpokelist = () => {
   
  axios
  .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
  .then(response => setpokelist(response.data))
  .catch(error => console.log(error))

 }
 useEffect(() => {

  getpokelist()
 }, []
 )


 

  const changePokeName = (event) => {
   setPokeName(event.target.value );
  };

  
    return (
      <div className="App">
       
        <select onChange={changePokeName}>
          <option value={""}>Nenhum</option>
          {pokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        {pokeName && <PokeCard pokemon={pokeName} />}
      </div>
    );
  
}

export default App
