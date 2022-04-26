import React from 'react'
import PagesPro from '../components/PagesPro'
import { useNavigate } from 'react-router-dom'
import { goToCriarViagens, goToHome } from '../pipe/line'
import { logout } from '../components/encam'
import requerData from '../components/requerData'
import AdminTripCard from "../../components/AdminTripCard/AdminTripCard"
import styled from "styled-components"


const BTLayer3 = styled.div`
    display: flex;
    justify-content: space-around;
    width: 350px;
    margin: 8px 0;
`

const Admin = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 600px;
`



const AdminPage = () => {
    PagesPro()
    const Navigate = useNavigate()
    const [tripsData, getTrips] = requerData("/trips", {})

    const tripsList = tripsData.trips && tripsData.trips.map((trip) => {
        return <AdminTripCard key={trip.id} name={trip.name} id={trip.id} getTrips={getTrips} />
    })

    return (
        <Admin>
            <h1>Painel Administrativo</h1>
            <BTLayer3>
                <button onClick={() => goToHome(Navigate)}>Voltar</button>
                <button onClick={() => goToCriarViagens(Navigate)}>Criar Viagem</button>
                <button onClick={() => logout(Navigate)}>Logout</button>
            </BTLayer3>
            {tripsList && tripsList.length > 0 ? tripsList : <p>Waiting...</p>}
        </Admin>
    )
}

export default AdminPage
