import React, {Component} from 'react'
import styled from 'styled-components'

const ChatContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputMensagem = styled.input`
    width: 100%;
    margin-right: 5px;
`

export class SecaoChat extends Component {
	state = {
		Mensagem: ''
	}

	onChangeMensagem = (event) => {

		this.setState({
            Mensagem: event.target.value
        })
		console.log(event.target.value)


	}

	render() {
		return <ChatContainer>
			<InputMensagem
				placeholder={'Mensagens'}
				value={this.state.Mensagem}
				onChange={this.onChangeMensagem}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</ChatContainer>
	}
}