import React from 'react';
import styled from 'styled-components'
import App from '../../App';


const MensagemContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`



const ChatHeader = styled.h2`
  height: 10px;
  width: 40px;
  margin-right: 10px;
  border-radius: 50%;
`

const SecaoMensagem = styled.p`
  height: 50px;
  width: 200px;
  margin-right: 10px;
  border-radius: 50%;
`

class Mensagem extends React.Component {
 

  onClickMensagem = () => {
    this.setState({
      Chat: !this.state.Chat
    })
  }

  

  render() {
   
    let componenteChat

    if(this.state.Chat) {
        componenteChat = <SecaoMensagem aoEnviar={this.aoEnviarMensagem}/>
    }

    return <MensagemContainer>
      <ChatHeader>
       <h2>{this.props.UserName}</h2>
      </ChatHeader>

      
      <p>{this.props.Mensagem}</p>
      
      {componenteChat}
    </MensagemContainer>
  }
  
}

export default App