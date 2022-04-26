import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from '../pages/Home'
import Viagens from '../pages/Viagens/Viagens'
import ApplicationFormPage from '../pages/ApplicationFormPage/ApplicationFormPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import AdminHomePage from '../pages/AdminHomePage/AdminHomePage'
import CreateTripPage from '../pages/CreateTripPage/CreateTripPage'
import TripDetailsPage from '../pages/TripDetailsPage/TripDetailPage'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" component={Home} />
                <Route  path="/Viagens" component={Viagens} />
                <Route  path="/trips/application" component={ApplicationFormPage} />
                <Route  path="/login" component={LoginPage} />
                <Route  path="/admin/trips/list" component={AdminHomePage} />
                <Route  path="/admin/trips/create" component={CreateTripPage} />
                <Route  path="/admin/trips/:id" component={TripDetailsPage} />
                <Route>
                    <div>Erro 404 - Página não encontrada</div>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router