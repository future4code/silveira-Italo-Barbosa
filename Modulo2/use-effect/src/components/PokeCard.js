import React, { useEffect, useState } from "react";
import axios from "axios";

function PokeCard(props)  {
 
  const [Pokemon, setPokemon] = useState()

  useEffect(() => {

   pegaPokemon(props.Pokemon)



  }, [] 
  
  )
  

  useEffect(() => {

    pegaPokemon(props.Pokemon)
 
 
 
   }, [props.Pokemon] 
   
   )


  
 
  const pegaPokemon = pokeName => {
    axios
      .get(`https://pokeapi.co/api/v2/Pokemon/${pokeName}`)
      .then(response => setPokemon(response.data))
      .catch(error => console.log(error))

  };

  
  

    return (
      <div>
        <p>{Pokemon.name}</p>
        <p>{Pokemon.weight} Kg</p>
        {Pokemon.types && <p>{Pokemon.types[0].type.name}</p>}
        {Pokemon.sprites && (
          <img src={Pokemon.sprites.front_default} alt={Pokemon.name} />
        )}
      </div>
    );
  
}

export default PokeCard;
