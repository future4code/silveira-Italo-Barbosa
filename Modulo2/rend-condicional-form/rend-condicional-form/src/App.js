import React from "react";
import styled from "styled-components";
import './App.css';
import Etapa1 from '../src/components/Etapa1'
import Etapa2 from '../src/components/Etapa2'
import Etapa3 from '../src/components/Etapa3'
import Etapa4 from '../src/components/Etapa4'


const Container = styled.div`

border: 1px solid white;
  height: 500px;
  width: 500px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: aqua;
  flex-direction: column;
  text-align: center;


`
const Button = styled.button`
  height: 20px;
  width: fit-content;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  box-shadow: 1px 0px 4px 3px rgba(0, 0, 0, 0.79);
  margin: 0 8px;
`;


export default class App extends React.Component {

  state = {
    Etapa: 1,
  }

  renderizaEtapa = () => {
    
   switch (this.state.Etapa) {
        case 1:
          return <Etapa1 />;
        case 2:
          return <Etapa2 />;
        case 3:
          return <Etapa3 />;
        case 4:
          return <Etapa4 />;
        default:
          return <Etapa4 />;
      }
  }

  proximaEtapa = () => {
    this.setState({ Etapa: this.state.Etapa + 1 });
  };

  render() {
    return (
      <Container>
        {this.renderizaEtapa()}
        <br />
        {this.state.Etapa !== 4 && (
          <button onClick={this.proximaEtapa}>Próximo</button>
        )}
      </Container>
    );
  }
}

