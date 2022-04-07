import React, {components} from "react";
import PerguntaC from "./perguntaC";
import PerguntaS from "./perguntaS";


export default class Etapa3 extends React.Component{



render() {
    return (
      <div>
        
        <h1>3.Informações gerais de ensino</h1>
     
        <PerguntaS
          pergunta={"5. Por que você não terminou um curso de graduação?"}
        />
        <PerguntaC
          pergunta={"6. Você fez algum curso complementar?"}
          opcoes={["Nenhum", "Curso técnico", "Curso de inglês"]}
        />
  

       
      </div>
    );
  }
  
}