import React, { useContext } from 'react';
import GlobalStateContext from '../Global/GlobalStateContext';
import HomeCard from '../Components/homeCard';


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

            <div loteria={select}>
                <select name='select' onChange={onSelect} value={select}>
                    <option value="" disabled>Escolha um</option>
                    {list}
                </select>
                <div>{nomes}</div>
                <p >Gerando: <b>{concursoId.id}</b></p>
            </div>
            <div>
                <div>
                    {sorteio}
                </div>
            </div>

        </div>
    )

}


export default Home