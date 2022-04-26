import React from 'react'
import useFormu from "../components/Requer"
import { goToHome} from '../pipe/line'
import { login } from "../components/encam"
import { useNavigate } from 'react-router-dom'
import PagesUnp from '../components/PagesUnp'


const LoginPage = () => {
    PagesUnp()
    const Navigate = useNavigate()
    const { formu, onChange } = useFormu({ email: "", password: "" })

    const onClickLogin = (event) => {
        event.preventDefault()
        login(formu, Navigate)
    }

    return (
        <div>
            <h1>Login</h1>
            <formu onSubmit={onClickLogin}>
                <input
                    placeholder={"E-mail"}
                    type={"email"}
                    name={"email"}
                    value={formu.email}
                    onChange={onChange}
                    required
                />
                <input
                    placeholder={"Senha"}
                    type={"password"}
                    name={"password"}
                    value={formu.password}
                    onChange={onChange}
                    required
                />
                <div>
                    <button onClick={() => goToHome(Navigate)}>Voltar</button>
                    <button type={"submit"}>Entrar</button>
                </div>

            </formu>
        </div>
    )
}

export default LoginPage
