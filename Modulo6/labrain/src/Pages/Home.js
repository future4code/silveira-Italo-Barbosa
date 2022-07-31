import React, { useContext } from 'react';
import GlobalStateContext from '../Global/GlobalStateContext';
import HomeCard from '../Components/homeCard';
import { BackgroundDyn, Sorteio } from '../Styled/theme';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';



const Home = () => {

    const { loterias } = useContext(GlobalStateContext)
    const { setLoterias } = useContext(GlobalStateContext)
    const { concursos } = useContext(GlobalStateContext)
    const { select } = useContext(GlobalStateContext)
    const { setSelect } = useContext(GlobalStateContext)
    const { concursoId } = useContext(GlobalStateContext)
    const { setConcursoId } = useContext(GlobalStateContext)




    const onSelect = (event) => {
        setSelect(event.target.value)
    }


    const list = loterias.map((loteria) => {
        return (
            <option key={loteria.id} value={loteria.id}> {loteria.nome} </option >
        )
    })
    const sorteio = concursoId.numeros?.map((number, index) => {
        return (
            <HomeCard key={index} number={number}></HomeCard>
        )
    })

    const nomes = loterias.map((loteria) => {
        if (Number(select) === loteria.id && concursoId.id != null) {
            return (
                <h4 key={loteria.id}>
                    {loteria.nome}
                </h4>
            )
        }
    })

    return (
        <div>
            <BackgroundDyn loteria={select}>
                <FormControl sx={{ m: 1, minWidth: 100 }}>
                    <h5 id="select">Selecione</h5>
                    <select name='select' onChange={onSelect} value={select}>
                        {list}
                    </select>
                </FormControl>
                <div>{nomes}</div>
                <p >Concurso Nº:<b>{concursoId.id}</b></p>
            </BackgroundDyn>
            <Sorteio>
                {sorteio}
            </Sorteio>
        </div>
    )
}


export default Home