/**let array
console.log('a. ', array)
//undefined

array = null
console.log('b. ', array)
//null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
//11

let i = 0
console.log('d. ', array[i])
//3


array[i+1] = 19
console.log('e. ', array)
//troca o 4 por 19 na lista

const valor = array[i+6]
console.log('f. ', valor)
// obtem o valor 9 por ser uma soma
*/

/*const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
//SUBI NUM ÕNIBUS EM MIRROCOS, 27*/


/*const nome = prompt ("Seu nome por favor?")
const email = prompt ("Seu email por favor?")

console.log(`O e-mail ${email} foi cadastrado com sucesso.
Seja bem-vinda(o), ${nome}!`)*/

 let lista = ["macarronada", "pizza", "aça", "lasanha", "sushi"]

//console.log(lista)

 console.log(`Essas são as minhas comidas preferidas:`, lista)

 const pref = Number(prompt("Insira sua comida predileta"))

 lista[1] = pref

 console.log("f", lista)

//

let listaDeTarefas = []

let a = prompt("Indique a primeira tarefa")
let b = prompt("Indique a segunda tarefa")
let c = prompt("Indique a terceira tarefa")

listaDeTarefas.push(a, b, c)
console.log(listaDeTarefas)
let d = Number(prompt("Indique uma tarefa que terminou"))

listaDeTarefas.splice(d,1)

console.log(listaDeTarefas)