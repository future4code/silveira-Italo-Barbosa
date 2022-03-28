import React, {components} from "react";
import PerguntaC from "./perguntaC";
import PerguntaS from "./perguntaS";




export default class Etapa1 extends React.Component{


render() {
  return (
    <div>
      <h1>1.Dados Gerais</h1>

    
        <PerguntaS pergunta={"1. Qual seu nome?"} />
        <PerguntaS pergunta={"2. Qual a sua idade?"} />
        <PerguntaS pergunta={"3. Seu email?"} />
        <PerguntaC
          pergunta={"4. Qual a sua escolaridade?"}
          opcoes={[
            "Ensino médio Incompleto",
            "Ensino médio Completo",
            "Ensino superior Incompleto",
            "Ensino superior Completo"
          ]}
        />
      </div>
    );
  }
}

   