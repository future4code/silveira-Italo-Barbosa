import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { FluentButton } from "../Fluent/Fluent";
import { FluentCard } from "../Fluent/Fluent";
import styled from "styled-components";


const Comp = styled.img`
 

 border: 4px solid Black;
  height: 200px;
  width: 200px;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  flex-direction: column;
  text-align: center;
  margin:auto;
padding: 5px;
`

const H2 = styled.h2`
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  flex-direction: column;
  text-align: center;
  margin:auto;



`

export default function Home (props) {

const [profile, setProfile] = useState({})
const [choice, setChoice] = useState([])


const getProfile =() => {

        axios
         .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/italosouza-silveira/person')
         .then((response)=>{setProfile(response.data.profile)})
         .catch((error)=>{console.log(error)})

                        }


const ChoosePerson = (very) => {

      const body ={
        id: profile.id,
        choice: very
                  }

        axios
         .post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/italosouza-silveira/choose-person',body)
         .then((response)=>{getProfile(console.log(response))})
         .catch((error)=>[console.log(error)])
                               }

useEffect(()=>{
  

 getProfile()


              },[])



const Limpar = () => {
        axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/italosouza-silveira/clear')
             .then((response)=>{getProfile(console.log(response))})
             .catch((error)=>[console.log(error)])
    }
                       

return(

 
<FluentCard>
    <div>

        <FluentButton appearance="accent" onClick={()=> props.setPage("Matches")}> Matches </FluentButton>
    </div>


    <div>
        <Comp src={profile.photo}/>
        <H2>{profile.name},</H2>
        <H2>{profile.age}</H2>
        <H2>{profile.bio}</H2>
    </div>

    <div>
        <FluentButton appearance="accent" onClick={()=> ChoosePerson(true) }> ✔️ </FluentButton>
        <FluentButton appearance="accent" onClick={()=> ChoosePerson(false) }> ❌ </FluentButton>

    </div>

    <div>
        <FluentButton appearance="outline" onClick={()=> Limpar() }>Limpar Matches e Reject </FluentButton>
    </div>
</FluentCard>



);

}
