import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import Cardpequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import styled from 'styled-components'



const inic = styled.div`
 display: flex;
    flex-direction: column;
    justify-items: flex-start;

`
function App() {

  return (
    <div className="App">
     <inic>
     <ini className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://uploads-ssl.webflow.com/5d640f4558306be99cf47a0e/5dd57846babb597b77c6bb1d_PerfilFuture4_cor.png" 
          nome="Italo" 
          descricao="Oi, eu sou Italo. Sou aspirante a desenvolvedor."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/929/929750.png" 
          texto="Ver mais"
        />
       </ini>
       </inic>
    
       <div className="page-section-container">
        
        <Cardpequeno 
          imagem="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/%40_symbol.svg/250px-%40_symbol.svg.png"
          
          email="Email: nos.100@hotmail.com" 
        />

        <Cardpequeno 
          imagem="https://w7.pngwing.com/pngs/571/321/png-transparent-google-map-mark-computer-icons-location-symbol-map-location-miscellaneous-angle-heart.png"
          
          endereco="Endereço: Rua dos Náufragos." 
        />


      </div>





      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://w7.pngwing.com/pngs/435/807/png-transparent-attitude-quotation-love-desktop-thought-a-love-angle-hand-thumbnail.png" 
          nome="Empresa A" 
          descricao="Atendimento de tickets de suporte e desenvolvimento de mecãnicas." 
        />
        
        <CardGrande 
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdnLJK4CDF_WXUDFd04REKkK_XEPGYRHF19g&usqp=CAU" 
          nome="Empresa B" 
          descricao="Desenvolvendo sistemas de segurança patrimonial" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
