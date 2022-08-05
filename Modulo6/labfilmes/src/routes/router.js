import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Tv from "../pages/Tv"
import Home from '../pages/Home'
import Detail from "../pages/Detail"



const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Tv" element={<Tv />} />
                <Route path="/Detail" element={<Detail />} />
                <Route path="*" element={<div></div>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router