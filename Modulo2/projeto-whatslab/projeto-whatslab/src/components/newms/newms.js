import React from 'react';
import styled from 'styled-components'
import App from '../../App';


const MensagemContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`



const MensagemHeader = styled.h2`
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
      Mensagem: !this.state.Mensagem
    })
  }

  

  render() {
   
    let componenteMensagem

    if(this.state.Mensagem) {
        componenteMensagem = <SecaoMensagem aoEnviar={this.aoEnviarMensagem}/>
    }

    return <MensagemContainer>
      <MensagemHeader>
       <h2>{this.props.nomeUsuario}</h2>
      </MensagemHeader>

      
      <p>{this.props.Mensagem}</p>
      
      {componenteMensagem}
    </MensagemContainer>
  }
  
}

export default Mensagem