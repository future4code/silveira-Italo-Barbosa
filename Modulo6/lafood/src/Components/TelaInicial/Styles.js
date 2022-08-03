import styled from "styled-components";

export const Container = styled.div`
  background-color: black;
  border: none;
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  z-index: 1000;
  align-items: center;
`;

export const NomeContainer = styled.div`
  padding-top: 50%;
`;

export const Nome1 = styled.div`
  color: white;
  text-align: center;
  font-size: 36px;
  letter-spacing: -0.1px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif, regular;
`;

export const Nome2 = styled.div`
  color: #50a747;
  text-align: center;
  font-size: 34px;
  font-weight: bold;
  letter-spacing: -0.1px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif, regular;
`;
