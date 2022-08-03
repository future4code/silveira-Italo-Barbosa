import styled from "styled-components";

export const StyledHeader = styled.header `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 40px;
    box-shadow: 0px 1px 1px 0px rgba(0,0,0,0.1);

    .central {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90%;
        height: 100%;
    }
`;

export const StyledButton = styled.button `
    background: none;
    border: none;
    width: 25px;

    &:hover {
        cursor: pointer;
    }
`;

export const StyledArrow = styled.div `
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 5px;
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
`;

export const StyledEmpty = styled.div `
    width: 25px;
    height: 10px;
`;