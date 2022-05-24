import React from "react"
import { useNavigate } from 'react-router-dom'
import { goToViagensDetail } from '../pipe/line'
import { deletV } from '../components/encam'
import styled from "styled-components"

const BTLayer4 = styled.div`
       padding: 10px;

       &:hover{
           background-color: aliceblue;
           transform: scale(1.5);
           cursor: pointer; 
        
       }
       &:hover:after {    
           
            content: "Delete";
           font-size: 15px;
     }

    
`
const Layer = styled.div`
     display: flex;
     box-shadow: 0 6px 6px 0 black;
    padding: 8px 15px;
    border-radius: 6px;
    margin: 10px 0;
    align-items: center;
    justify-content: space-between;
    width: 500px;
    opacity: 1;
    

    &:hover{

        background-color: aqua;
         cursor: pointer;
    }
    
`

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
        <Layer onClick={() => goToViagensDetail(Navigate, id)}>
            <p>{name}</p>
            <BTLayer4 onClick={onClickApaga}>X</BTLayer4>
        </Layer>
    )
}

export default AdminC