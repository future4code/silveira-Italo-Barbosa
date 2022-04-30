import React from "react"
import styled from "styled-components"

const Viagens = styled.div`

margin: auto;
align-items: center;
text-align: center;

background-image: url(https://wallpapercave.com/wp/wp2376732.jpg);


`

const ViagensC = (props) => {
    const {date, name, description, planet, durationInDays} = props.trip

    return(
        <Viagens>
            <p><b>Data:</b> {date}</p>
            <p><b>Nome:</b> {name}</p>
            <p><b>Descrição:</b> {description}</p>
            <p><b>Planeta:</b> {planet}</p>
            <p><b>Duração:</b> {durationInDays}</p>
            
        </Viagens>
    )
}

export default ViagensC