import React from 'react'
import ViagensC from "../components/ViagensC"
import RequerData from "../components/Requer"
import { goToHome, goToFormulario } from '../pipe/line'
import { useNavigate } from 'react-router-dom'
import styled from "styled-components"



const BTLayer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 400px;
    margin: 30px 0 20px 0;
`

const Lista = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 400px;
`







const Viagens = () => {
    const [tripsData] = RequerData("/trips", {})
    const Navigate = useNavigate()
    
    const tripsList = tripsData.trips && tripsData.trips.map((trip) => {
        return <ViagensC key={trip.id} trip={trip} />
    })

    return (
        <Lista>
            <BTLayer>
                <button onClick={() => goToHome(Navigate)}>Voltar</button>
                <button onClick={() => goToFormulario(Navigate)}>Inscrever-se</button>
            </BTLayer>
            <h1>Lista de Viagens</h1>
            {tripsList && tripsList.length > 0 ? tripsList : <p>Waiting...</p>}
        </Lista>
    )
}

export default Viagens