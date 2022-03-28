import React, {components} from "react";
import PerguntaS from "./perguntaS";


export default class Etapa2 extends React.Component{


render() {
    return (
      <div>
        
        <h1>2.Informações do ensino superior</h1>

        <div>
        <PerguntaS pergunta={"5. Qual curso?"} />
        <PerguntaS pergunta={"6. Qual a unidade de ensino?"} />
      </div>


      </div>
       
      

    );
  }
  
}