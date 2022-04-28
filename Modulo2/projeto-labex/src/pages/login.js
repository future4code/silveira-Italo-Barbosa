import React from 'react'
import {useForm} from "../components/Form"
import { goToHome} from '../pipe/line'
import { login } from "../components/encam"
import { useNavigate } from 'react-router-dom'
import PagesUnp from '../components/PagesUnp'


const Login = () => {
    PagesUnp()
    const Navigate = useNavigate()
    const { form, onChange } = useForm({ email: "", password: "" })

    const onClickLogin = (event) => {
        event.preventDefault()
        login(form, Navigate)
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={onClickLogin}>
                <input
                    placeholder={"E-mail"}
                    type={"email"}
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    required
                />
                <input
                    placeholder={"Senha"}
                    type={"password"}
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    required
                />
                <div>
                    <button onClick={() => goToHome(Navigate)}>Voltar</button>
                    <button type={"submit"}>Entrar</button>
                </div>

            </form>
        </div>
    )
}

export default Login
