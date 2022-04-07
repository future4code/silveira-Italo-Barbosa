import React from "react";
import Usuarios from "./components/Usuarios/Usuarios";
import Login from "./components/Login/Login"
import styled from "styled-components";

const ContainerI = styled.div`

border: 4px solid Black;
  height: 400px;
  width: 400px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: gold;
  flex-direction: column;
  text-align: center;
  margin:auto;
padding: 20px;

`

const Button2 = styled.button`
color: red;
background-color: black;
padding: 6px;
border: 75px solid gold;

&:hover {
  background-color: blue;
  color: red;
}

`






export default class App extends React.Component {
  state = {
    PagIn: "Login"
  };

  changePag = () => {
    if (this.state.PagIn === "Login") {
      this.setState({ PagIn: "Usuarios" });
    } else {
      this.setState({ PagIn: "Login" });
    }
  };

  render() {
    return (
      <ContainerI>
        {this.state.PagIn === "Login" ? <Login /> : <Usuarios />}
        <Button2 onClick={this.changePag}>Próxima Página</Button2>
      </ContainerI>
    );
  }
}