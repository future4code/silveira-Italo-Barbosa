import React from 'react'
import PagesPro from '../components/PagesPro'
import RequerData from '../components/Requer'
import { useNavigate, useParams } from "react-router-dom"
import { goToAdminPage } from '../pipe/line'
import CobaiaC from '../components/CobaiaC'


const ViagensDetail = () => {
    PagesPro()
    const Navigate = useNavigate()
    const { id } = useParams()
    const [tripDetails, getTripDetails] = RequerData(`/trip/${id}`)
   
    const candidates = tripDetails && tripDetails.trip && tripDetails.trip.candidates.map((candidates) => {
        return <CobaiaC key={candidates.id} candidate={candidates} tripId={id} getTripDetails={getTripDetails} />
    
    })

    const CandidatosAprovados = tripDetails && tripDetails.trip && tripDetails.trip.approved.map((candidates) => {
        return <li key={candidates.id}>{candidates.name}</li>
    })

    return (
        <div>
        
            {tripDetails && tripDetails.trip && <h1>{tripDetails.trip.name}</h1>}
            {tripDetails && tripDetails.trip && <div>
                <p><b>Nome:</b> {tripDetails.trip.name}</p>
                <p><b>Descrição:</b> {tripDetails.trip.description}</p>
                <p><b>Planeta:</b> {tripDetails.trip.planet}</p>
                <p><b>Duração:</b> {tripDetails.trip.durationInDays}</p>
                <p><b>Data:</b> {tripDetails.trip.date}</p>
            </div>}
            <button onClick={() => goToAdminPage(Navigate)}>Voltar</button>

            <h2>Candidatos Pendentes</h2>
            {candidates && candidates.length > 0 ? candidates : <p>Não há candidatos pendentes</p>}

            <h2>Candidatos Aprovados</h2>
            {CandidatosAprovados && CandidatosAprovados.length > 0 ? CandidatosAprovados : <p>Não tem candidatos aprovados</p>}
        </div>
    )
}

export default ViagensDetail
