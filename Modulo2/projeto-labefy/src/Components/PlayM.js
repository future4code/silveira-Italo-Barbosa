import React from "react";
import axios from "axios";


const axiosConfig = {
  headers: {
    Authorization: "Italo-Barbosa-Silveira"
  }
};

export default class PlayM extends React.Component {
  state = {
    PlayM: {},
    EditPlay: "edicButton",
    name: "",
    email: ""
  };

  componentDidMount() {
    this.getPlayM();
  }

  getPlayM = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${
          this.props.PlayId
        }`,
        axiosConfig
      )
      .then(response => {
        this.setState({ PlayM: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  changeEditPlay = () => {
    if (this.state.EditPlay === "edicButton") {
      this.setState({ EditPlay: "EditPlayTable" });
    } else {
      this.setState({ EditPlay: "edicButton" });
    }
  };

  handlenameChange = event => {
    const novonameValue = event.target.value;

    this.setState({ name: novonameValue });
  };

  

  handlePlayCriar = () => {
    const body = {
      name: this.state.name,
      
    };

    axios
      .put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${
          this.props.PlayId
        }`,
        body,
        axiosConfig
      )
      .then(() => {
        this.setState({ name: "" });
        this.getPlayM();
        this.changeEditPlay();
        alert(`Usuário ${this.state.name} Edição bem Sucedida`);
      })
      .catch(error => {
        alert("Error 406!");
        console.log(error);
      });
  };

  render() {
    const EditPlay =
      this.state.EditPlay === "edicButton" ? (
        <button onClick={this.changeEditPlay}>Editar</button>
      ) : (
        <div>
          <input
            placeholder="nome"
            type="text"
            value={this.state.name}
            onChange={this.handlenameChange}
          />
          
          <button onClick={this.handlePlayCriar}>Confirmar</button>
        </div>
      );

    return (
      <div>
        <div>
          <p>{this.state.PlayM.name}</p>
          
        </div>
        <div>{EditPlay}</div>
        <hr />
        <button onClick={this.props.changePag}>
           PlayLists
        </button>
      </div>
    );
  }
}