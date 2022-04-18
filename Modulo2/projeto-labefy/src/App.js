import React from "react";
import PlayL from "./Components/PlayL";
import AddPlay from "./Components/AddPlay"
import styled from "styled-components";


const ContainerI = styled.div`
border: 4px solid Black;
  height: 800px;
  width: 800px;
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
    PagIn: "AddPlay"
  };

  changePag = () => {
    if (this.state.PagIn === "AddPlay") {
      this.setState({ PagIn: "PlayL" });
    }
    else {
      this.setState({ PagIn: "AddPlay" });
    }
  };

  render() {
    return (
      <ContainerI>
        {this.state.PagIn === "AddPlay" ? <AddPlay /> : <PlayL />}
        <Button2 onClick={this.changePag}>Próxima Página</Button2>
      </ContainerI>
    );
  }
}