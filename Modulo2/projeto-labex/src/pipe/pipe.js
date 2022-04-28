import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from '../pages/Home'
import Viagens from '../pages/Viagens'
import Formulario from "../pages/Formulario"
import Login from "../pages/login"
import AdminPage from "../pages/AdminPage"
import CriarViagens from "../pages/CriarViagens"
import ViagensDetail from "../pages/ViagensDetail"


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route  path="/Viagens" element={<Viagens/>} />
                <Route  path="/Formulario" element={<Formulario/>} />
                <Route  path="/Login" element={<Login/>} />
                <Route  path="/AdminPage" element={<AdminPage/>} />
                <Route  path="/CriarViagens" element={<CriarViagens/>} />
                <Route  path="ViagensDetail" element={<ViagensDetail/>} />
                <Route path="*" element={<div></div>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router