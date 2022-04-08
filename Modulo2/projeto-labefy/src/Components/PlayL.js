import React from "react";
import styled from "styled-components";
import axios from "axios";
import PlayM from "./PlayM";

const List = styled.li`
color: blue;
border-color: red;
border: 2px;
`

const Apagar = styled.button`
  
  color: red;
  padding: 5px;
  border: 2px solid gold;
  
  &:hover {
   color: blue;
   background: red;
  }
  
  `;
const Button3 = styled.button`
background-color: whitesmoke;
color: black;
padding: 5px;
border: 4px solid gold;
&:hover {
   color: blue;
   background: red;
  }
`

const H3 = styled.h3` 
color: blue;
&:hover {
   color: violet;
   background: 2px white;
  }
`





const axiosConfig = {
  headers: {
    Authorization: "Italo-Barbosa-Silveira"
  }
};

export default class PlayL extends React.Component {
  state = {
    ListPl: [],
    PagIn: "ListPl",
    PlayId: "",
    name: ""
  };

  componentDidMount() {
    this.fetchListPl();
  }

  fetchListPl = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        axiosConfig
      )
      .then(response => {
        this.setState({ ListPl: response.data });
      });
  };

  handleDelPlay = PlayId => {
    if (window.confirm("Confirma esta ação ???")) {
      axios
        .delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${PlayId}`,
          axiosConfig
        )
        .then(() => {
          alert("Apagada");
          this.fetchListPl();
        })
        .catch(e => {
          alert("ERROR 401");
        });
    }
  };

  changePag = PlayId => {
    if (this.state.PagIn === "ListPl") {
      this.setState({ PagIn: "PlayL", PlayId: PlayId });
    } else {
      this.setState({ PagIn: "ListPl", PlayId: "" });
    }
  };

  handlenameChange = event => {
    const novonameValue = event.target.value;

    this.setState({ name: novonameValue });
  };

  handleProcPlay = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/search?name=${this.state.name
        }`,
        axiosConfig
      )
      .then(response => {
        this.setState({ ListPl: response.data });
      })
      .catch(error => {
        alert("Error 402");
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        {this.state.PagIn === "ListPl" ? (
          <div>
            <ul>
              {this.state.ListPl.length === 0 && <div>HMMMMMMM, Wait.</div>}
              {this.state.ListPl.map(Play => {
                return (
                  <List>
                    <span onClick={() => this.changePag(Play.id)}>
                      {Play.name}
                    </span>
                    <Apagar
                      onClick={() => this.handleDelPlay(Play.id)}
                    >
                      Apagar
                    </Apagar>
                  </List>
                );
              })}
            </ul>
            <hr />
            <H3>Procurar PlayList</H3>
            <input
              placeholder="nome"
              type="text"
              value={this.state.name}
              onChange={this.handlenameChange}
            />
            <Button3 onClick={this.handleProcPlay}>Editar</Button3>
          </div>
        ) : (
          <PlayM PlayId={this.state.PlayId} changePag={this.changePag} />
        )}
      </div>
    );
  }
}