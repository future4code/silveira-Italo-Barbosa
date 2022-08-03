import styled from 'styled-components';
import { primaryColor, secondaryColor } from "../Constants/colors";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`;

export const StyledLogo = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    #main-text {
        display: flex;
        flex-direction: column;
        font-size: 300%;
        color: ${primaryColor};
        line-height: 40px;
    }

    #snd-text {
        font-weight: bold;
        color: ${secondaryColor};
    }
`;

export const StyledForm = styled.form `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 100%;
`;

export const ScreenContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    min-height: 100vh;
    font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const InputContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 600px;
`;

export const MainContainer = styled.div `
    display:flex; 
    flex-direction: column;
    flex-wrap: nowrap;
    
`;

export const Container = styled.div `
    display:flex; 
    flex-direction: column;
    flex-wrap: nowrap;

`;

export const Header = styled.header `
    display : flex; 

`;

export const Title = styled.h1 `  `
export const Form  = styled.form `  `
export const Button= styled.div `  `
export const Input= styled.div`  `


