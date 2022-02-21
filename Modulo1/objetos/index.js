/*const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])*/

/*1A*/
// matheus nachtergaele
// virginia cavendish
// globo 14h


/*2*/

/*const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)*/


//A:
// cachorro juca 3 SRD
// gato juba 3 SRD
// tartaruga jubo 3 SRD

//B: permite copiar as informações do objeto anterior e editalas para
//um novo objeto.


/*3*/

/*function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))*/

/*A*/
// False, Undefined

/*B*/
// Ele retornou a informação da propriedade Backender e a 
//informação altura não estava definida.


//Exercicio de escrita
/*1*/
//A e B
/*const dados = {

    nome: "Italo",
    apelidos: ["branco", "itulo", "cmd"],
    
    
    }

    function mensagem(objeto){
       
return `meu nome é, ${objeto.nome}, mas pode me chamar
de ${objeto.apelidos[0]}, ${objeto.apelidos[1]}, ${objeto.apelidos[2]}`
            
        }
 
const dados2 = {...dados, apelidos:["1", "2", "3"]}
console.log(mensagem(dados2))*/

//2

/*const ob1 = {

    nome: "Italo",
    idade: "26",
    profi: "programador",

}

const ob2 = {

    nome: "unknown",
    idade: "22",
    profi: "programador",
}

const objeto= (object)=>{

    const array = [object.nome, object.nome.length, object.idade, object.profi, object.profi.length]
    
return array

}

console.log(objeto(ob1))
console.log(objeto(ob2))*/
//3

/*const carrinho = []

obj1 = {
    nome: "manga",
    disponibilidade: true,
}


obj2 = {
    nome: "graviola",
    disponibilidade: true,
}

obj3 = {
    nome: "cajarana",
    disponibilidade: true,
}

function frutas(objeto){

carrinho.push(objeto)
}

frutas(obj1)
frutas(obj2)
frutas(obj3)

console.log(carrinho)*/
