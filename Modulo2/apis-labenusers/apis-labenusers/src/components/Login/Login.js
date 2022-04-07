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

export default class Login extends React.Component {
  state = {
    name: "",
    email: ""
  };

  handlenameChange = event => {
    const novonameValue = event.target.value;

    this.setState({ name: novonameValue });
  };

  handleEmailChange = event => {
    const novoEmailValue = event.target.value;

    this.setState({ email: novoEmailValue });
  };

  handleUsCriar = () => {
    const axiosConfig = {
      headers: {
        Authorization: "Italo-Barbosa-Silveira"
      }
    };

    const body = {
      name: this.state.name,
      email: this.state.email
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        axiosConfig
      )
      .then(() => {
        alert(`Usuário ${this.state.name} Adicionado com Sucesso`);
        this.setState({ name: "", email: "" });
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
        <Input
          placeholder="E-mail"
          type="email"
          value={this.state.email}
          onChange={this.handleEmailChange}
        />
        <Button1 onClick={this.handleUsCriar}>Adicionar Usuário</Button1>
      </Container2>
    );
  }
}


