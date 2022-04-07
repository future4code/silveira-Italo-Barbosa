import React from "react";
import styled from "styled-components";
import axios from "axios";
import Inform from "../Inform/Inform";

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

export default class Usuarios extends React.Component {
  state = {
    ListUs: [],
    PagIn: "ListUs",
    userId: "",
    name: ""
  };

  componentDidMount() {
    this.fetchListUs();
  }

  fetchListUs = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        axiosConfig
      )
      .then(response => {
        this.setState({ ListUs: response.data });
      });
  };

  handleEvapUs = userId => {
    if (window.confirm("Confirma esta ação ???")) {
      axios
        .delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
          axiosConfig
        )
        .then(() => {
          alert("Evaporou");
          this.fetchListUs();
        })
        .catch(e => {
          alert("ERROR 401");
        });
    }
  };

  changePag = userId => {
    if (this.state.PagIn === "ListUs") {
      this.setState({ PagIn: "Inform", userId: userId });
    } else {
      this.setState({ PagIn: "ListUs", userId: "" });
    }
  };

  handlenameChange = event => {
    const novonameValue = event.target.value;

    this.setState({ name: novonameValue });
  };

  handleProcUs = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${this.state.name
        }&email=`,
        axiosConfig
      )
      .then(response => {
        this.setState({ ListUs: response.data });
      })
      .catch(error => {
        alert("Error 402");
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        {this.state.PagIn === "ListUs" ? (
          <div>
            <ul>
              {this.state.ListUs.length === 0 && <div>HMMMMMMM, Wait.</div>}
              {this.state.ListUs.map(user => {
                return (
                  <List>
                    <span onClick={() => this.changePag(user.id)}>
                      {user.name}
                    </span>
                    <Apagar
                      onClick={() => this.handleEvapUs(user.id)}
                    >
                      Apagar
                    </Apagar>
                  </List>
                );
              })}
            </ul>
            <hr />
            <H3>Procura-se</H3>
            <input
              placeholder="nome"
              type="text"
              value={this.state.name}
              onChange={this.handlenameChange}
            />
            <Button3 onClick={this.handleProcUs}>Editar</Button3>
          </div>
        ) : (
          <Inform userId={this.state.userId} changePag={this.changePag} />
        )}
      </div>
    );
  }
}


