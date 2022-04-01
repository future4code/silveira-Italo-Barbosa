import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
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

// const button = styled.button`
// background-color: red;
// Código falho, uma tentativa.
// &:hover:{
//   color: red;
// }

// `

export default class App extends React.Component {
state = {
Usuarios: [
  {nomeUsuario: 'paulinha', fotoUsuario:'https://picsum.photos/55/55', fotoPost: 'https://picsum.photos/201/155',},
  {nomeUsuario:'Laissa',  fotoUsuario:'https://picsum.photos/55/55',  fotoPost:'https://picsum.photos/205/151',},
  {nomeUsuario:'Maria', fotoUsuario:'https://picsum.photos/60/60',  fotoPost:'https://picsum.photos/205/155', }



],
nomeUsuario: "",
fotoUsuario:"",
fotopost:"",
}
NewPost = () => {
  const noPost = {
    nomeUsuario: this.state.valorInputnomeUsuario,
    fotoUsuario: this.state.valorInputfotoUsuario,
    fotoPost: this.state.valorInputfotoPost,
  };
const novosUsuarios = [... this.state.Usuarios, noPost];
this.setState({
  Usuarios: novosUsuarios,
  nomeUsuario: "",
  fotoUsuario:"",
  fotoPost:"",

});
return this.state.Usuarios;
};

onChangeInputnomeUsuario = (event) => {
  this.setState({ valorInputnomeUsuario: event.target.value });
};
onChangeInputfotoUsuario = (event) => {
  this.setState({ valorInputfotoUsuario: event.target.value });
};
onChangeInputfotoPost = (event) => {
  this.setState({ valorInputfotoPost: event.target.value });
};

  render() {
    const Componentes = this.state.Usuarios.map((post, index) =>{
      return (
      
      <Post
      key= {index}
      nomeUsuario={post.nomeUsuario}
      fotoUsuario={post.fotoUsuario}
      fotoPost={post.fotoPost}
      
      />
      )
      }
      )
    
  

    return (
      <MainContainer>

       <Pub>
          <input
            // Mesma lógica do exemplo anterior
            value={this.state.valorInputnomeUsuario}
            // Repare na função que é passada aqui no onChange
            onChange={this.onChangeInputnomeUsuario}
            placeholder={"nomeUsuario"}
          />
          <input
            // Diferente do input acima, a variável de estado aqui é outra
            value={this.state.valorInputfotoUsuario}
            // E a função também é outra
            onChange={this.onChangeInputfotoUsuario}
            placeholder={"fotoUsuario"}
          />
          <input
            // Diferente do input acima, a variável de estado aqui é outra
            value={this.state.valorInputfotoPost}
            // E a função também é outra
            onChange={this.onChangeInputfotoPost}
            placeholder={"fotoPost"}
          />
          <button onClick={this.NewPost}>Adicionar</button>
        </Pub> 



        {/* <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/55/55'}
          fotoPost={'https://picsum.photos/201/155'}
        />


        <Post
          nomeUsuario={'Laissa'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/205/151'}
        />

        <Post
          nomeUsuario={'Maria'}
          fotoUsuario={'https://picsum.photos/60/60'}
          fotoPost={'https://picsum.photos/205/155'}
       
        />  */}

        <div>{Componentes}</div>
      </MainContainer>
    );

   
    }
  }
/*export default App;*/