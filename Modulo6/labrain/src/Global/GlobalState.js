import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../Constant/url";
import GlobalStateContext from "./GlobalStateContext";


const GlobalState = (props) => {

  const [loterias, setLoterias] = useState([]);
  const [concursos, setConcursos] = useState([]);
  const [concursoId, setConcursoId] = useState([])
  const [select, setSelect] = useState('0')



  useEffect(() => {
    getLoterias([])
  }, [])
  useEffect(() => {
    getConcursos()
    getConcursoId()
  }, [select])

  const getLoterias = () => {
    axios.get(`${BASE_URL}/loterias`)
      .then((response) => {
        setLoterias(response.data)
      })
      .catch((error) => console.log(error.message))
  }

  const getConcursos = () => {
    axios.get(`${BASE_URL}/loterias-concursos`)
      .then(response => {
        setConcursos(response.data)
      })
      .catch(error => {
        console.log(error.message)
      })
  }


  const getConcursoId = async () => {
    const listConcursos = concursos.length > 0 && concursos.filter((concurso) => {
      return concurso.loteriaId === Number(select)
    })
    if (listConcursos[0]) {
      await axios.get(`${BASE_URL}/concursos/${Number(listConcursos[0].concursoId)}`)
        .then((response) => {
          setConcursoId(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }



  const data = {
    loterias,
    concursos,
    concursoId,
    getLoterias,
    setLoterias,
    getConcursos,
    setConcursos,
    getConcursoId,
    setConcursoId,
    setSelect,
    select
  }



  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  )
}

export default GlobalState;