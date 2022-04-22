import { useEffect, useState } from "react"
import React from "react";
import axios from "axios";
import styled from "styled-components";
import { fluentCard } from "@fluentui/web-components";




const Ul = styled.ul`
 
 height: 500px;
  width: 200px;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  flex-direction: column;
  text-align: center;
  margin:auto;


`



 function Matches (props) {
	
	
    const [matchlist, setMatchList] = useState([])
    

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

          return <Ul>
                 <li><img src={match.photo}/>{match.name}</li>

		         </Ul>

                                                    });


return (
	<fluentCard>
			
	 {NovoMatchList}
			    
    </fluentCard>
		       
       );


			};

export default Matches;