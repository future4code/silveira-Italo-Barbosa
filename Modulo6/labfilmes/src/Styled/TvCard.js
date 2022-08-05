import styled from "styled-components";

export const TvCard = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #82828280;
    border-radius: 5px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 10px 15px;
    margin: 20px;
    transition: 1s;
    &:hover {
        box-shadow: rgba(100, 100, 111, 0.2) 2px 10px 10px 2px;
        transform: translateY(-10px) scale(1);
    }
    `