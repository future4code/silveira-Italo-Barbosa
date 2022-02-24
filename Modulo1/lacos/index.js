/*let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)

// parece que o codigo está fazendo uma soma entre valor e i que daria um resultado final de 10 no console


const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}
// acredito que o codigo está pedindo que extraia da lista e imprima todos os numeros acima de 18
// se sim seria suficiente, seria necessario indicar os indices que quer.


const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}*/

// no console se apresentaria 4 linhas de asteriscos indo de 1 a 4.



//Exercicio de escrita
//1

/*let bicharada =Number (prompt("Quantos bichos de estimação você tem?"))
let bichos = []

if (bicharada == 0){
        console.log("Que pena! Você pode adotar um pet!")
      }
      else{
        for(let i=0; i<bichos; i++){
            bichos.push(prompt("digite o nome de seus bichos"))
        }
         console.log(bichos)
        
    }*/
    



  
  


//2

/*let original =  [10, 20, 200, 46, 50, 57, 83]

function imprimir(){
    return original
}
console.log(imprimir())

for (let dividir of original) {
    {
          console.log(dividir/10)
      }
  }*/

   
 /* const arrayPares = (original) => {
    const Pares = []
    for (let valor of original) {
        if (valor % 2 === 0) {
            Pares.push(valor)
        }
    }
    console.log(Pares)
}

arrayPares(original)*/
let original =  [10, 20, 200, 46, 50, 57, 83]

 function lista(original){

    str = []
    let string = original[i]
    for (let i = 0; i < original.length; i++){
    
        str.push(`O elemento do índex ${i} é: ${string}`)
        
    }console.log(str)
}



let menor = 0;
  let maior = 0;
for (let i = 0; i < original.length; i++) {
   if ( original[i] > maior ) {
      maior = original[i];
   }for (let i = 0; i > original.length; i++) {
    if ( original[i] < menor ) 
       menor = original[i];
    }
    
}

console.log(maior)
console.log(menor)