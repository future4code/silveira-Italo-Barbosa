import React from "react"
import { useNavigate } from 'react-router-dom'
import { goToViagemDetail } from '../pipe/line'
import { deletV } from '../components/encam'


const AdminC = (props) => {
    const { id, name, getTrips } = props
    const Navigate = useNavigate()

    const onClickApaga = (event) => {
        event.stopPropagation()
        if (window.confirm(`Quer apagar essa viagem ${name}?`)) {
            deletV(id, getTrips)
        }
    }

    return (
        <div onClick={() => goToViagemDetail(Navigate, id)}>
            <p>{name}</p>
            <button onClick={onClickApaga}/>
        </div>
    )
}

export default AdminC