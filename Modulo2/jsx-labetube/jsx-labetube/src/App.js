
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
const imagem1 = "imagem 1"
const imagem2 = "imagem 2"
const imagem3 = "imagem 3"
const imagem4 = "imagem 4"
const imagem5 = "imagem 5"
const imagem6 = "imagem 6"
const imagem7 = "imagem 7"
const imagem8 = "imagem 8"

function reproduzVideo() {
  alert("O vídeo está sendo reproduzido")
}
  return (
   <div>

     
       <div className="tela-inteira">
        <header>
            <h1>Lab Tube</h1>
            <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <main>
            <nav className="menu-vertical">
                <ul>
                    <li className="botoes-meunu-vertical">Início</li>
                    <li className="botoes-meunu-vertical">Em alta</li>
                    <li className="botoes-meunu-vertical">Inscrições</li>
                    <hr/>
                    <hr/>
                    <li className="botoes-meunu-vertical">Originais</li>
                    <li className="botoes-meunu-vertical">Histórico</li>
                </ul>
            </nav>

            <section className="painel-de-videos">
                <div className="box-pagina-principal media1" onClick={reproduzVideo()}>
                    <img src="https://picsum.photos/400/400?a=1 " alt=""/>
                    <h4>imagem1</h4>
                </div>
                <div className="box-pagina-principal media2" onClick={reproduzVideo()}>
                    <img src="https://picsum.photos/400/400?a=2 " alt=""/>
                    <h4>imagem2</h4>
                </div>
                <div className="box-pagina-principal media3" onClick={reproduzVideo()}>
                    <img src="https://picsum.photos/400/400?a=3 " alt=""/>
                    <h4>imagem3</h4>
                </div>
                <div className="box-pagina-principal media4" onClick={reproduzVideo()}>
                    <img src="https://picsum.photos/400/400?a=4 " alt=""/>
                    <h4>imagem4</h4>
                </div>
                <div className="box-pagina-principal media5" onClick={reproduzVideo()}>
                    <img src="https://picsum.photos/400/400?a=5 " alt=""/>
                    <h4>imagem5</h4>
                </div>
                <div className="box-pagina-principal media6" onClick={reproduzVideo()}>
                    <img src="https://picsum.photos/400/400?a=6 " alt=""/>
                    <h4>imagem6</h4>
                </div>
                <div className="box-pagina-principal media7" onClick={reproduzVideo()}>
                    <img src="https://picsum.photos/400/400?a=7 " alt=""/>
                    <h4>imagem7</h4>
                </div>
                <div className="box-pagina-principal media8" onClick={reproduzVideo()} >
                    <img src="https://picsum.photos/400/400?a=8 " alt=""/>
                    <h4>imagem8</h4>
                </div>
            </section>
        </main>

        <footer>
            <h4>Oi! Eu moro no footer!</h4>
        </footer>
       </div>

      

   </div>
  );
}

export default App;
