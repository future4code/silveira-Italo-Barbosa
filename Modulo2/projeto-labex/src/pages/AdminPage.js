import React from 'react'
import PagesPro from '../components/PagesPro'
import { useNavigate } from 'react-router-dom'
import { goToCriarViagens, goToHome } from '../pipe/line'
import { logout } from '../components/encam'
import RequerData from '../components/Requer'
import AdminC from "../components/AdminC"
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
    width: 1366px;
    height: 700px;
    margin: auto;
    text-align: center;
    align-items: center;
    background-image: url(https://www.teslarati.com/wp-content/uploads/2020/12/Starship-SN8-launch-recap-120920-SpaceX-descent-8-c.jpg);
`



const AdminPage = () => {
    PagesPro()
    const Navigate = useNavigate()
    const [tripsData, getTrips] = RequerData("/trips", {})

    const tripsList = tripsData.trips && tripsData.trips.map((trip) => {
        return <AdminC key={trip.id} name={trip.name} id={trip.id} getTrips={getTrips} />
    })

    return (
        <Admin>
            <h1>Administração</h1>
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
