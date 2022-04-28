import React from 'react'
import {useForm} from '../components/Form'
import RequerData from '../components/Requer'
import { encamA } from '../components/encam'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToViagens } from '../pipe/line'
import { country } from '../components/nacoes';

const Formulario = () => {
    const [tripId, setTripId] = useState("")
    const { form, onChange, clear } = useForm({ name: "", age: "", applicationText: "", profession: "", country: "" })
    const [TViagens] = RequerData("/trips", {})
    const Navigate = useNavigate()

    const clearCampos = () => {
        clear()
        setTripId("")
    }

    const onClickEnvia = (event) => {
        event.preventDefault()
        encamA(form, tripId, clearCampos)
    }

    const onChangeViagens = (event) => {
        setTripId(event.target.value)
    }

    const ViagensOpc = TViagens.trips && TViagens.trips.map((trip) => {
        return <option key={trip.id} value={trip.id}>{trip.name}</option>
    })

    return (
        <div>
            <h1>Inscreva-se para Viajar</h1>
            <form onSubmit={onClickEnvia}>
                <select defaultValue="" onChange={onChangeViagens}>
                    <option value="" disabled>Selecione uma Viagem</option>
                    {ViagensOpc}
                </select>
                <input
                    placeholder={"Nome"}
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                    pattern={"^.{3,}$"}
                    title={"O nome deve ter no mínimo 3 caracteres"}
                    required
                />
                <input
                    placeholder={"Idade"}
                    type={"number"}
                    name={"age"}
                    value={form.age}
                    onChange={onChange}
                    required
                    min={21}
                />
                <input
                    placeholder={"Texto de sua Candidatura"}
                    name={"applicationText"}
                    value={form.applicationText}
                    onChange={onChange}
                    required
                    pattern={"^.{20,}$"}
                    title={"O texto tem que ter no mínimo 20 caracteres"}
                />
                <input
                    placeholder={"Profissão"}
                    name={"profession"}
                    value={form.profession}
                    onChange={onChange}
                    required
                    pattern={"^.{5,}$"}
                    title={"A profissão deve ter no mínimo 5 caracteres"}
                />
                <select
                    placeholder={"País"}
                    name={"country"}
                    value={form.country}
                    onChange={onChange}
                    required
                >
                    <option value={""} disabled>Escolha uma Nação</option>
                    {country.map((country) => {
                        return <option value={country} key={country}>{country}</option>
                    })}
                </select>
                <div>
                    <button onClick={() => goToViagens(Navigate)}>Voltar</button>
                    <button type={"submit"}>Enviar</button>
                </div>
            </form>
        </div>
    )
}

export default Formulario