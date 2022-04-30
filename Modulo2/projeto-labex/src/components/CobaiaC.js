import React from "react"
import { escoCobaia } from '../components/encam'




const CobaiaC = (props) => {
    const { id, applicationText, profession, age, name, nacoes } = props.candidate

    const escolhe = (decision) => {
        escoCobaia(props.tripId, id, decision, props.getTripDetails)
    }

    return (
        <div>
            <p><b>Nome:</b> {name}</p>
            <p><b>Profissão:</b> {profession}</p>
            <p><b>Idade:</b> {age}</p>
            <p><b>País:</b> {nacoes}</p>
            <p><b>Texto de Candidatura:</b> {applicationText}</p>
            <div>
                <button onClick={() => escolhe(true)}>Aprovar</button>
                <button onClick={() => escolhe(false)}>Reprovar</button>
            </div>

        </div>
    )
}

export default CobaiaC