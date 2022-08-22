import styled from "styled-components";

export const Container = styled.div `
    border: none;
    margin: 0 auto;
    padding-bottom: 35vh;
    margin: -1.2vh;
`

export const HeaderContainer = styled.div `
    padding-top: 20%;
`

export const Nome1 = styled.div `
    color: black;
    text-align: center;
    font-size: 36px;
    letter-spacing: -0.1px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, regular;
`

export const Nome2 = styled.div `
    color: #50a747;
    text-align: center;
    font-size: 34px;
    font-weight: bold;
    letter-spacing: -0.1px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, regular;
`

export const Titulo = styled.div `
    text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, regular;
    font-weight: bold;
    padding-top: 5%;
`

export const InputsContainer = styled.div `
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, regular;
    display: flex;
    flex-direction: column;
    padding-top: 2vh;
    input {
        padding: 3vw;
        margin-bottom: 2vh;
        margin-left: 4vw;
        margin-right: 4vw;
    }
`

export const ButtonContainer = styled.div `
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, regular;
    display: flex;
    background-color: #50a747;
    padding: 3vw;
    margin-left: 5vw;
    margin-right: 5vw;
    border-radius: 3px;
    button {
        background-color: transparent;
        color: white;
        border: none;
        padding-left: 39vw;
    }
`

export const CadastroContainer = styled.div `
    display: flex;
    span:hover {
        cursor: pointer;
    }
` 