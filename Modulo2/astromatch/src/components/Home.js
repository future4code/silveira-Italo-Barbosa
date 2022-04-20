import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";


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



                       

return(

 
<div>
    <div>

        <button onClick={()=> props.ToPage("Matches")}> Matches </button>
    </div>


    <div>
        <img src={profile.photo}/>
        <h1>{profile.name},</h1>
        <h1>{profile.age}</h1>
        <h2>profile.bio</h2>
    </div>

    <div>
        <button onClick={()=> ChoosePerson(true) }> ✔️ </button>
        <button onClick={()=> ChoosePerson(false) }> ❌ </button>

    </div>
</div>



);

}
