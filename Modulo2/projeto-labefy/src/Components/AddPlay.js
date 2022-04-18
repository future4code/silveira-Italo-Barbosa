import React from "react";
import axios from "axios";
import styled from "styled-components";

const Container2 = styled.div`
padding: 5px;
border-radius: 10px;
`

const Input = styled.input`
border: 5px solid gold;
padding: 8px;
`



const Button1 = styled.button`
color: red;
background-color: whitesmoke;
padding: 4px;
border: 20px solid gold;
&:hover {
  background-color: blueviolet;
  color: red;
}
`

export default class AddPlay extends React.Component {
  state = {
    name: "",
  };

  handlenameChange = event => {
    const novonameValue = event.target.value;

    this.setState({ name: novonameValue });
  };

 

  handlePlayCriar = () => {
    const axiosConfig = {
      headers: {
        Authorization: "Italo-Barbosa-Silveira"
      }
    };

    const body = {
      name: this.state.name,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        body,
        axiosConfig
      )
      .then(() => {
        alert(`PlayList ${this.state.name} Criada com Sucesso`);
        this.setState({ name: "" });
      })
      .catch(error => {
        alert("Error 409");
        console.log(error);
      });
  };

  render() {
    return (
      <Container2>
        <Input
          placeholder="nome"
          type="text"
          value={this.state.name}
          onChange={this.handlenameChange}
        />
        
        <Button1 onClick={this.handleUsCriar}>Adicionar PlayList</Button1>
      </Container2>
    );
  }
}