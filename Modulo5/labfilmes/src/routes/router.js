import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from '../pages/Home'



const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                
                <Route path="*" element={<div></div>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router