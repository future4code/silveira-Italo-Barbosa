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
    background-color: none;
`

const Lista = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 675px;
    width: 1200px;
    margin: auto;
    text-align: center;
    align-items: center;
    background-image: url(https://images.newscientist.com/wp-content/uploads/2019/04/12100240/falcon.jpg);

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