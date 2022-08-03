import React, { useEffect, useState } from "react";
import App from "../../App";
import { Container, NomeContainer, Nome1, Nome2 } from "./Styles";

const TelaInicial = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return isLoading ? (
    <Container>
      <NomeContainer>
        <Nome1>Future</Nome1>

        <Nome2>Eats</Nome2>
      </NomeContainer>
    </Container>
  ) : (
    <App />
  );
};

export default TelaInicial;