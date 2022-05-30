import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'
import React, {useState} from 'react'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

const [curtido, setcurtido] = useState(false)
const [numerocurtidas, setnumerocurtidas] = useState(0)
const [comentando, setcomentando] = useState(false)
const [numerocomentario, setnumerocomentario] = useState(0)
const [comentario, setcomentario] = useState([])

export default class Post extends React.Component{



  

  onClickCurtida = () => {

  if (curtido, numerocurtidas){({
    curtido: !setcurtido,
    numeroCurtidas: setnumerocurtidas - 1
  })
}else {
    ({
      curtido: !setcurtido,
      numerocurtidas: setnumerocurtidas + 1
    })
  
  
}

  };

 onClickComentario = (comentando) => {

    ({
      comentando: !setcomentando
    })


  };

  enviarComentario = (comentario) => {
    const listaDeComentarios = [...setcomentario, comentario]

    ({
      comentario: listaDeComentarios,
      comentando: false,
      numerocomentario: setnumerocomentario + 1
    })


  }
  render() {
  const iconeCurtida = setcurtido ? (iconeCoracaoPreto) : (iconeCoracaoBranco)
  const caixaDeComentario = setcomentando ? (
    <SecaoComentario enviarComentario={this.enviarComentario}/>  
    ) : (
      setcomentario.map(comentario => {

        return (
          <CommentContainer>
            <p>{comentario}</p>
          </CommentContainer>
        )
      })

    )
  return (
   

    PostContainer>
    <PostContainer>
    <PostHeader>
      <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
      <p>{this.props.nomeUsuario}</p>
    </PostHeader>

    <PostPhoto src={this.props.fotoPost} alt={'Imagem'}/>

    <PostFooter>
      <IconeComContador
        icone={iconeCurtida}
        onClickIcone={this.onClickCurtida}
        valorContador={setnumerocurtidas}
      />

      <IconeComContador
        icone={iconeComentario}
        onClickIcone={this.onClickComentario}
        valorContador={setnumerocomentario}
      />

    </PostFooter>
    {caixaDeComentario}
  </PostContainer>
  )
}
  }
     
