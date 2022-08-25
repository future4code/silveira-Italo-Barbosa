import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from '../Pages/Home'
import Login from "../Pages/Login"
import Cadastro from "../Pages/Cadastro"



const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Login" element={<Login/>} />
                <Route path="/Cadastro" element={<Cadastro/>} />
                <Route path="*" element={<div>EI! Oque faz aqui??
                  Volte para Home onde temos controle da situação :D
                </div>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router