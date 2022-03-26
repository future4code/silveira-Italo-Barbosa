import './App.css';
import React from 'react';
import styled from 'styled-components';
import Mensagem from './components/newms/newms';


const MensagemContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const Lei = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 6px 12px;
`


export default class App extends React.Component {
  state = {
  Mensagens: [
    {nomeUsuario: 'Batman', Mensagem:'Olá', },
    {nomeUsuario:'Highlander',  Mensagem:'Olá', },
   
  
  ],
  nomeUsuario: "",
  Mensagem:"",
  
  }
  newms = () => {
    const newms = {
      nomeUsuario: this.state.valorInputnomeUsuario,
      Mensagem: this.state.valorInputMensagem,
     
    };
  const novasMensagens = [... this.state.Mensagens, newms];
  this.setState({
    Mensagens: novasMensagens,
    nomeUsuario: "",
    Mensagem:"",
    
  
  });
  return this.state.Mensagens;
  };
  
  onChangeInputnomeUsuario = (event) => {
    this.setState({ valorInputnomeUsuario: event.target.value });
  };
  onChangeInputMensagem = (event) => {
    this.setState({ valorInputMensagem: event.target.value });
  };
  

  render() {
    const Chat = this.state.Mensagens.map((post, index) =>{
      return (

      <Mensagem
      key= {index}
      nomeUsuario={post.nomeUsuario}
      Mensagem={post.Mensagem}
      />
      )
      }
      )

  return (
    
  <MensagemContainer>

    <Lei>
       <input
         value={this.state.valorInputnomeUsuario}
         onChange={this.onChangeInputnomeUsuario}
         placeholder={"Usuario"}
       />
       <input
         value={this.state.valorInputMensagem}
         onChange={this.onChangeInputMensagem}
         placeholder={"mensagem"}
       />
      
       <button onClick={this.newms}>Enviar</button>
     </Lei> 



      <Mensagem
       nomeUsuario={'Batman'}
       Mensagem={''}
       
     />
     <Mensagem
       nomeUsuario={'Highlander'}
       Mensagem={''}
       
     />
  
   <div>{Chat}</div>
   
</MensagemContainer>

  
  );

  
}
}

