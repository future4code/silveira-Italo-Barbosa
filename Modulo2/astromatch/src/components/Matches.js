import { useEffect, useState } from "react"
import React from "react";
import axios from "axios";



 function Matches () {
	
	
    const [matchlist, setMatchList] = useState()



    useEffect(()=>{

       getMatches();


	              });

     const getMatches = () => {
	   axios
		.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/italosouza-silveira/matches')
        .then((response) => {setMatchList(response.data.matches)})
		.catch((response)=> {console.log(response)})
	                          };
	
		const NovoMatchList = matchlist.map((match)=>{

          return <ul key={match.id}>
                 <li><img src={match.photo}/>{match.name}</li>

		         </ul>

                                                    });


return (
	<div>
				
	 {NovoMatchList}
			    
    </div>
		       
       );


			};

export default Matches;