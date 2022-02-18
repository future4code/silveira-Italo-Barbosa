//Primeiro exercicio de interpretação

/*function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))*/

//Está sendo realizada uma função de multiplicação.


//Segundo exercicio de interpretação

/*let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

//Se o texto não for cenoura em minusculo, vai aparecer como false.
// "Eu gosto de cenoura" True
//"CENOURA é bom pra vista" True
//"Cenouras crescem na terra" True*/


//Exercicio de escrita

// function linha(){

//     let linha = ("Eu sou Italo, tenho 26 anos, moro em cidade e sou estudante.")

// }
// console.log(linha())

// function text(linha){

// linha = linha.replaceAll("Italo", "Enoque")
// linha = linha.replaceAll("26", "20")
// linha = linha.replaceAll("estudante", "programador")

// return linha

// }

// let fala = text("Eu sou Italo, tenho 26 anos, moro em cidade e sou estudante.")

// console.log(fala)

// Exercicio 2 de Escrita
//A
/*function soma(a, b){

a = 45
b = 47

return a + b

}

console.log(soma())*/

//B
/*function boolean(a, b){

a = 56
b = 45

return a > b
}

console.log(boolean())*/

//C
/*function paciencia(a){

a = 30    
a = (a%2) == 0

return a

}


console.log(paciencia())*/


/*let ab = prompt("Escreva um texto?")

function texti(ab){
    
let tam = ab.length  
let maius = ab.toUpperCase()


console.log(`O tamanho é: ${tam} a frase em maíscula é: ${maius}`)

}

texti(ab)*/

//


let primeironumero =Number (prompt("Indique um numero"))
let segundonumero =Number (prompt("Indique um segundo numero"))

function imprimir(primeironumero, segundonumero,){
console.log(`Numeros inseridos, ${primeironumero} e ${segundonumero}`)


}
imprimir(primeironumero, segundonumero)

function somar(soma){

soma = (primeironumero) + segundonumero



return soma
}

console.log("Somados",somar())


function dif(sub){

sub = (primeironumero) - segundonumero

return sub
}

console.log("Diferença", dif())


function multi(mut){


mut = (primeironumero) * segundonumero
return mut
}

console.log("Multiplicados", multi())

function div(divid){

divid = (primeironumero) / segundonumero

return divid

}

console.log("Divisão", div())