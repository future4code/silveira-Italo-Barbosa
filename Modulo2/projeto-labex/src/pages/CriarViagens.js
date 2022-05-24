import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToAdminPage, goToFormulario } from '../pipe/line'
import PagesPro from '../components/PagesPro'
import {useForm} from "../components/Form"
import { CriarV } from "../components/encam"
import {Planetas} from "../components/Planetas"
import styled from "styled-components"


const Criar = styled.div`

margin: auto;
text-align: center;
align-items: center;

background-image: url(https://spaceflightnow.com/wp-content/uploads/2022/01/DSC_5587.jpg);
    height: 600px;
    width: 1100px;

`

const CriarViagens = () => {
    PagesPro()
    const Navigate = useNavigate()
    const { form, onChange, clear } = useForm({ name: "", planet: "", date: "", description: "", durationInDays: "" })

    const onClickCriar = (event) => {
        event.preventDefault()
        CriarV(form, clear)
    }

    const today = new Date()
    const stringToday = today.getFullYear() + "-" +
    ("0" + (today.getMonth() + 1)).substr(-2) + "-"
    + ("0" + today.getDate()).substr(-2)

    return (
        <Criar>
            <h1>Criar Viagem</h1>
            <form onSubmit={onClickCriar}>
                <input
                    placeholder={"Nome"}
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                    pattern={"^.{3,}$"}
                    title={"O nome da viagem tem que ter no mínimo 3 caracteres"}
                    required
                />
                <select
                    placeholder={"Planeta"}
                    name={"planet"}
                    defaultValue={""}
                    onChange={onChange}
                    required
                >
                    <option value={""} disabled>Qual Planeta ?</option>
                    {Planetas.map((Planetas) => {
                        return <option value={Planetas} key={Planetas}>{Planetas}</option>
                    })}
                </select>
                <input
                    placeholder={"Data"}
                    type={"date"}
                    name={"date"}
                    value={goToFormulario.date}
                    onChange={onChange}
                    required
                    min={stringToday}
                />
                <input
                    placeholder={"Descrição"}
                    name={"description"}
                    value={form.description}
                    onChange={onChange}
                    required
                    pattern={"^.{15,}$"}
                    title={"O nome deve ter no mínimo 15 caracteres"}
                />
                <input
                    placeholder={"Duração em dias"}
                    type={"number"}
                    name={"durationInDays"}
                    value={form.durationInDays}
                    onChange={onChange}
                    required
                    min={50}
                />
                <div>
                    <button onClick={() => goToAdminPage(Navigate)}>Voltar</button>
                    <button type={"submit"}>Criar</button>
                </div>
            </form>
        </Criar>
    )
}

export default CriarViagens
