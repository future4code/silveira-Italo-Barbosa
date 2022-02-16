/*const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)
/**False porque uma das variaveis é false */

/*resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 
/**False, o resultado permanece false devido a segunda variavel,
 * mesmo adicionando a variavel 3 não alteraria o resultado final. */

/*resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)
/**Segundo a matematica, o resultado seria True se unir o resultado mais
 * "OR" das duas primeiras variaveis seria false+true e isso resulta em true.
 */

/*console.log("d. ", typeof resultado)

/**O resultado será Boolean por estarmos lidando com variaveis cujo
 * resultado é uma afirmação ou não
 */

 /*let primeiroNumero = prompt("Digite um numero!")
 let segundoNumero = prompt("Digite outro numero!")
 
 const soma = primeiroNumero + segundoNumero
 
 console.log(soma)

/**O código apenas adiciona um numero após o outro*/

/**Sugestão fazer o valor inserido no prompt retornar como uma variavel
 * number*/

/*const idade1 = prompt("Qual é a sua idade?")
const idade2 = prompt("Qual a idade do seu amigo?")

const resultado = idade1 > idade2

console.log("Sua idade é maior do que a do seu melhor amigo?",
resultado)
console.log("A diferença de idade entre os dois é!", idade1 - idade2)*/

/*const par = prompt("Indique um número par!")

const res = par/2

const resto = par % 2

console.log(resto)
/**Números par sempre vai dá 0 como resultado e Números impar dá 1
 * como resultado*/

/*const anos = prompt("Quantos anos você tem?")
const meses = anos * 12
const dias = anos * 365
const hours = dias * 24
console.log (dias)
console.log (meses)
console.log (hours)*/
/**Calculo funcional :) */

const number1 = prompt("Fale um número!");
const number2 = prompt("Fale um segundo número!");

const maior = number1 > number2;
const igual = number1 == number2;
const div1 = number1 / number2;
const div2 = number2 / number1;

const tf1 = div1 % div2 == 0
const tf2 = div2 % div2 == 0


console.log("O primeiro numero é maior que o segundo?", maior);
console.log("O primeiro numero é igual ao segundo?", igual);
console.log("O primeiro numero é divisível pelo segundo?", tf1);
console.log("O segundo numero é divisível pelo primeiro?", tf2);
