import React, {useState} from 'react'
import styled from "styled-components"
import { useState } from 'react'

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComment = styled.input `
    width: 100%;
    margin-right: 5px;
`



const [inputValue, setInputValue] = useState("")

export default class SecaoComentario extends Component {


	
	

	onChangeComentario = (event) => {
		this.setState({inputValue: event.target.value})
	}

	render() {
		return <CommentContainer>
			<InputComment
				placeholder={'Comentario'}
				value={setInputValue}
				onChange={this.onChangeComentario}
			/>
			<button onClick={() => {this.props.enviarComentario(setInputValue)}}>Enviar</button>
		</CommentContainer>
	}
}

