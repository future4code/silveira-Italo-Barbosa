/*const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}*/

// O codigo faz um teste de divisão, se o numero pode ser dividido por 2,
//O "passou no teste" aparece para numeros pares
//"não passou no teste" numeros impar. 

/*let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)*/

//O codigo acima serve para informar o valor da fruta.
//O valor impresso será R$5
//O valor impresso continuaria sendo R$5



/*const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)*/

//A primeira linha está solicitando um numero ao usuario,
//10 o numero passou no teste, -10 não iria aparecer nada apenas um erro.
//A string mensagem não está sendo acessa pelo console, por este motivo,
//causaria um erro de não definida.


/*const idade = Number(prompt("Digite sua idade."))

if(idade > 18) {
  console.log("Você pode dirigir!")
}else{
    console.log("você não pode dirigir!")
}*/



const turno = prompt("Em que turno você trabalha? responda M para matutino V para vespertino N para noturno")

if(turno === "M") {
  console.log("Bom dia!")
}else if(turno === "V"){
 
        console.log("Boa tarde!")

}else{
    console.log("Boa noite!")
}


/*let turno = prompt("Em que turno você trabalha? responda M para matutino V para vespertino N para noturno")
let resposta
switch (turno) {
  case "M":
    resposta = "Bom dia"
    break;
  case "V":
    resposta = "Boa tarde"
    break;
  case "N":
    resposta = "Boa noite"
    break;
}
console.log(resposta)*/

let genero = prompt("Qual é o genero do filme?")
let ingresso =Number (prompt("qual o valor do ingresso?"))

if(ingresso <= 15) {
    console.log("Bom filme!")
  }else if (genero === "fantasia"){
      console.log("Escolha outro filme :(")
  }