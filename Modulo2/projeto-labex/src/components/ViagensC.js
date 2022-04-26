import React from "react"




const ViagensC = (props) => {
    const {date, name, description, planet, durationInDays} = props.trip

    return(
        <div>
            <p><b>Data:</b> {date}</p>
            <p><b>Nome:</b> {name}</p>
            <p><b>Descrição:</b> {description}</p>
            <p><b>Planeta:</b> {planet}</p>
            <p><b>Duração:</b> {durationInDays}</p>
            
        </div>
    )
}

export default ViagensC