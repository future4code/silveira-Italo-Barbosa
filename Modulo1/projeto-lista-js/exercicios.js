// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  let alt = Number (prompt(`Fale uma altura!`))
  let larg = Number (prompt(`Digite uma largura`))
  let calculo = alt * larg
  
  console.log(calculo)

  return calculo
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const ano = Number (prompt("Em qual ano estamos?"))
  const idad = Number (prompt("Em qual ano você nasceu?"))
  an = ano - idad
 console.log(an)
return an

}
// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
    
    
  return IMC = (peso / (altura * altura))
  

}

// EXERCÍCIO 04

function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Qual seu nome?")
  const idade = prompt("qual sua idade?")
  const email = prompt("qual seu email?")
console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui

  const cor1 = prompt("Me fale uma cor favorita")
  const cor2 = prompt("Segunda cor")
  const cor3 = prompt("Terceira cor")
  
  const list = [cor1, cor2, cor3]

  console.log(list)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

string = prompt("")
 
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

return resultado = custo / valorIngresso


}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

return string = string1 > string2


}


// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui



  return array["",""] = array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

  return array.pop()
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui


  return array = array[1] = [1 -1]
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  
  return string = string1.tolowercase() == string2.tolowercase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}