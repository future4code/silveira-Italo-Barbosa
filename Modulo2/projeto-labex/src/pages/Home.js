import React from 'react'
import { goToViagens, goToLogin } from '../pipe/line'
import { useNavigate } from 'react-router-dom'
import styled from "styled-components"

const BTLayer2 = styled.div`
    width: 200px;
    display: flex;
    justify-content: space-between;
`



const Home = () => {
    const Navigate = useNavigate()
    return (
        <>
            <h1>LabeX</h1>
            <BTLayer2>
                <button onClick={() => goToViagens(Navigate)}>Ver Viagens</button>
                <button onClick={() => goToLogin(Navigate)}>Área de Admin</button>
            </BTLayer2>
        </>
    )
}

export default Home

