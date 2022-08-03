import React from "react";
import { useNavigate } from 'react-router-dom'
import {} from '../../routes/coordinator'
import { Container, FooterIcones } from './Styles'

import carrinhoPreto from '../../Imgs/carrinho.png'
import carrinhoVerde from '../../Imgs/carrinho-verde.png'
import homePreto from '../../Imgs/home.png'
import homeVerde from '../../Imgs/home-verde.png'
import userPreto from '../../Imgs/user.png'
import userVerde from '../../Imgs/user-verde.png'

const Footer = () => {
    const navigate = useNavigate()

    return (
        <Container>
            <FooterIcones>
                <img src={navigate.location.pathname === "/" ? homeVerde : homePreto} alt="icone home" onClick={() => (navigate)} />
                <img src={navigate.location.pathname === "/carrinho" ? carrinhoVerde : carrinhoPreto} alt="icone carrinho" onClick={() => (navigate)} />
                <img src={navigate.location.pathname === "/perfil" ? userVerde : userPreto} alt="icone Perfil" onClick={() => (navigate)} />
            </FooterIcones>
        </Container>
    )
}

export default Footer;