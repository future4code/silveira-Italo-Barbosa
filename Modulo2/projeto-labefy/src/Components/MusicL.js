import React from "react";
import styled from "styled-components";
import axios from "axios";


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






const axiosConfig = {
  headers: {
    Authorization: "Italo-Barbosa-Silveira"
  }
};

export default class MusicL extends React.Component {
  state = {
    MusicL: [],
    PagIn: "MusicL",
    trackId: "",
    name: "",
    artist: "",
    link: "",

  };

  componentDidMount() {
    this.fetchMusicL();
  }

  fetchMusicL = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/tracklists/${trackId}/tracks",
        axiosConfig
      )
      .then(response => {
        this.setState({ MusicL: response.data });
      });
  };

  handleDeltrack = trackId => {
    if (window.confirm("Confirma esta ação ???")) {
      axios
        .delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labefy/tracklists/:tracklistId/tracks/${trackId}/${trackId}`,
          axiosConfig
        )
        .then(() => {
          alert("Apagada");
          this.fetchMusicL();
        })
        .catch(e => {
          alert("ERROR 401");
        });
    }
  };

  changePag = trackId => {
    if (this.state.PagIn === "MusicL") {
      this.setState({ PagIn: "trackL", trackId: trackId });
    } else {
      this.setState({ PagIn: "MusicL", trackId: "" });
    }
  };

  handlenameChange = event => {
    const novonameValue = event.target.value;

    this.setState({ name: novonameValue });
  };
  handleartistChange = event => {
    const novoartistValue = event.target.value;

    this.setState({ artist: novoartistValue });
  };
  handlelinkChange = event => {
    const novolinkValue = event.target.value;

    this.setState({ link: novolinkValue });
  };

  

  render() {
    return (
      <div>
        {this.state.PagIn === "MusicL" ? (
          <div>
            <ul>
              {this.state.MusicL.length === 0 && <div>HMMMMMMM, Wait.</div>}
              {this.state.MusicL.map(track => {
                return (
                  <List>
                    <span onClick={() => this.changePag(track.id)}>
                      {track.name}
                    </span>

                    <Input
                      placeholder="nome"
                      type="text"
                      value={this.state.name}
                      onChange={this.handlenameChange}
                    />
                    <Input
                     placeholder="artist"
                     type="text"
                     value={this.state.artist}
                     onChange={this.handleartistChange}
                    />
                   <Input
                    placeholder="link"
                    type="text"
                    value={this.state.link}
                    onChange={this.handlelinkChange}
                   />


                    <Apagar
                      onClick={() => this.handleDeltrack(track.id)}
                    >
                      Apagar
                    </Apagar>
                  </List>
                );
              })}
            </ul>
            <hr />
          </div>
        ) : (
          <MusicL trackId={this.state.trackId} changePag={this.changePag} />
        )}
      </div>
    );
  }
}