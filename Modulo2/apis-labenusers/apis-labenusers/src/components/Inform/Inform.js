import React from "react";
import axios from "axios";


const axiosConfig = {
  headers: {
    Authorization: "Italo-Barbosa-Silveira"
  }
};

export default class Inform extends React.Component {
  state = {
    Inform: {},
    EditUs: "edicButton",
    name: "",
    email: ""
  };

  componentDidMount() {
    this.getInform();
  }

  getInform = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${
          this.props.userId
        }`,
        axiosConfig
      )
      .then(response => {
        this.setState({ Inform: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  changeEditUs = () => {
    if (this.state.EditUs === "edicButton") {
      this.setState({ EditUs: "EditUsTable" });
    } else {
      this.setState({ EditUs: "edicButton" });
    }
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
    const body = {
      name: this.state.name,
      email: this.state.email
    };

    axios
      .put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${
          this.props.userId
        }`,
        body,
        axiosConfig
      )
      .then(() => {
        this.setState({ name: "", email: "" });
        this.getInform();
        this.changeEditUs();
        alert(`Usuário ${this.state.name} Edição bem Sucedida`);
      })
      .catch(error => {
        alert("Error 406!");
        console.log(error);
      });
  };

  render() {
    const EditUs =
      this.state.EditUs === "edicButton" ? (
        <button onClick={this.changeEditUs}>Editar</button>
      ) : (
        <div>
          <input
            placeholder="nome"
            type="text"
            value={this.state.name}
            onChange={this.handlenameChange}
          />
          <input
            placeholder="E-mail"
            type="email"
            value={this.state.email}
            onChange={this.handleEmailChange}
          />
          <button onClick={this.handleUsCriar}>Confirmar</button>
        </div>
      );

    return (
      <div>
        <div>
          <p>{this.state.Inform.name}</p>
          <p>{this.state.Inform.email}</p>
        </div>
        <div>{EditUs}</div>
        <hr />
        <button onClick={this.props.changePag}>
           lista de usuários
        </button>
      </div>
    );
  }
}

