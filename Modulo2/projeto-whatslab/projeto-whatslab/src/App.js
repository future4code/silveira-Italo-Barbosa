import './App.css';
import React from 'react';
import styled from 'styled-components';
import chat from './components/chat/chat';
import newms from './components/newms/newms';


const MensagemContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const Pub = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 6px 12px;
`

const Mensagem = styled.p`
height: 60px;
width: 200px;

`
/*export default class App extends React.Component {



};

fuction App() {
  
  return (
    
  <MensagemContainer>

    <Pub>
       <input
         // Mesma lógica do exemplo anterior
         value={this.state.valorInputnomeUsuario}
         // Repare na função que é passada aqui no onChange
         onChange={this.onChangeInputnomeUsuario}
         placeholder={"Usuario"}
       />
       <input
         // Diferente do input acima, a variável de estado aqui é outra
         value={this.state.valorInputMensagem}
         // E a função também é outra
         onChange={this.onChangeInputMensagem}
         placeholder={"mensagem"}
       />
      
       <button onClick={this.NewPost}>Enviar</button>
     </Pub> 



      <Mensagem
       nomeUsuario={'paulinha'}
       Mensagem={''}
       
     />
     <Mensagem
       nomeUsuario={'Laissa'}
       Mensagem={''}
       
     />
  

   
</MensagemContainer>


  );

  
}
*/

export default App;
