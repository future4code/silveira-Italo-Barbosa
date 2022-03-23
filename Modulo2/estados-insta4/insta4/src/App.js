import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
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
        />
      </MainContainer>
    );
  }
}

export default App;
