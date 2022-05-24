import React from 'react'
import { goToViagens, goToLogin } from '../pipe/line'
import { useNavigate } from 'react-router-dom'
import styled from "styled-components"




const BTLayer2 = styled.div`
    width: 200px;
    height: 60px;
    display: flex;
    justify-content: space-between;
    background-color: none;
    opacity: 0.7;
    size: 5px;
    margin: auto;
    background: transparant;

`
const Pub = styled.div`

height: 100%;
width: 100%;
float: left;
top: 0;
padding: none;
position: fixed;
margin: auto;
align-items: center;
text-align: center;
background-image: url(https://www.teslarati.com/wp-content/uploads/2020/12/Starship-SN8-launch-recap-120920-SpaceX-descent-1-c.jpg);
background: transparant;

`



const Home = () => {
    const Navigate = useNavigate()
    return (
     
        <Pub>

           <h1>LabeX</h1>
           <iframe width="560" height="315" src="https://www.youtube.com/embed/TeVbYCIFVa8?rel=0?version=3&autoplay=1&controls=0&showinfo=0&loop=1" frameborder="0" allow=" accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         
            <BTLayer2>
                <button onClick={() => goToViagens(Navigate)}>Ver Viagens</button>
                <button onClick={() => goToLogin(Navigate)}>Área de Admin</button>
            </BTLayer2>
        </Pub>
    )
}

export default Home

