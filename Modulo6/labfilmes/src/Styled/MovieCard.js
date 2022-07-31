import styled from "styled-components";

export const MovieCard = styled.div`
    display: flex;
    flex-direction: column;
    border: 3px solid #82828280;
    height: 350px;
    width: 350px;
    max-width: 100%;
    max-height: 100%;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    text-shadow: black;
    border-radius: 5px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 10px 10px;
    margin: 10px;
    transition: 1s;
    color: none;
    &:hover {
        box-shadow: rgba(100, 100, 111, 0.2) 2px 10px 10px 2px;
        transform: translateY(-10px) scale(1.1);
    }
    `

export const H2 = styled.h2`
    text-decoration: black;
    text-shadow: white;
    margin: 0;
    padding: 0;

`
export const P = styled.h3`

`