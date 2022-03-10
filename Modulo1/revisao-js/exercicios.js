// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01

let array=[3, 2, 1, 4, 7]

function retornaTamanhoArray(array) {
    array.length

    return array.length
   
}
console.log(retornaTamanhoArray)

// EXERCÍCIO 02

let array2=["8", "23", "16", "10"]
function retornaArrayInvertido(array2) {
  array2.reverse()
return array2
}
console.log(retornaArrayInvertido)
// EXERCÍCIO 03

let array3=[3, 2, 1, 4, 7]
function retornaArrayOrdenado(array3) {
    array3.sort(function (a, b){
        return a - b;
    })

  return array3
}
console.log(retornaArrayOrdenado)

// EXERCÍCIO 04

let array4=[]

function retornaNumerosPares(array4) {
    
        const Pares = []
        for (let valor of array4) {
            if (valor % 2 === 0) {
                Pares.push(valor)
            }
        }
        return Pares
    }
   


// EXERCÍCIO 05

function retornaNumerosParesElevadosADois(array) {
    
    const Pares = []
    for (let valor of array) {
        if (valor % 2 == 0) {
            valor = valor ** 2
            
            Pares.push(valor)
            
        }
       
        
    }
    return Pares
    
}
console.log(retornaNumerosParesElevadosADois)


// EXERCÍCIO 06
let array5=[]

function retornaMaiorNumero(array5) {
    let maior = -0;
for (let i = 0; i < array5.length; i++) {
    if ( array5[i] > maior ) {
          maior = array5[i];
       }
}return maior
}



// EXERCÍCIO 07


function retornaObjetoEntreDoisNumeros(num1, num2) {

    let maiorNumero
    let menorNumero 
    let objeto={}
if (num1 > num2) {
    maiorNumero = num1
    menorNumero = num2
} else if (num2 > num1) {
    maiorNumero = num2
    menorNumero = num1
} else {
    maiorNumero = num1
    menorNumero = num1
}

let maiorDivisivelPorMenor
    if (maiorNumero % menorNumero === 0) {
        maiorDivisivelPorMenor = true
    } else {
        maiorDivisivelPorMenor = false
    }

    let diferenca = (maiorNumero - menorNumero )
    objeto = {'maiorNumero':maiorNumero,
            'maiorDivisivelPorMenor':maiorDivisivelPorMenor,
            'diferenca':diferenca}
    return objeto
  
        
    }
console.log(retornaObjetoEntreDoisNumeros)



// EXERCÍCIO 08

function retornaNPrimeirosPares(n) {
   
    let arrayN = []
    for(let number = 0; arrayN.length <n; number++){
    if (number % 2 == 0){
            arrayN.push(number)
          }
          
             
            
        }
        return arrayN
    }
    console.log(retornaNPrimeirosPares)
    



// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

    

    if(ladoA !== ladoB && ladoB !== ladoC && ladoC !== ladoA) {
        return "Escaleno"
      }else if(ladoA === ladoB && ladoB === ladoC && ladoC === ladoA){
       
              return"Equilátero"
      
      }else{
          return"Isósceles"
      }


}
console.log(classificaTriangulo)


// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    
 let menor = Infinity;
  let maior = -0;
  let segundoMenor = Infinity;
  let segundoMaior = -0;
  

  for (let i of array) {
    if (i < menor) {
      menor = i;
    }
    if (i > maior) {
      maior = i;
    }
  }

  for (let i of array) {
    if (i < segundoMenor && i !== menor) {
      segundoMenor = i;
    }
    if (i > segundoMaior && i !== maior) {
      segundoMaior = i;
    }
  }
  let   Array2 = [];
  Array2.push(segundoMaior);
  Array2.push(segundoMenor);
  
  return Array2
}


// EXERCÍCIO 11

function retornaChamadaDeFilme(filme) {
    
let name = filme.nome;
let year = filme.ano;
let dire = filme.diretor;
let actor = filme.atores;
           
    return `Venha assistir ao filme ${name}, de ${year}, dirigido por ${dire} e estrelado por ${actor[0]}, ${actor[1]}, ${actor[2]}, ${actor[3]}`
                
            }




// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    let name = pessoa.nome;
    let year = pessoa.idade;
    let end = pessoa.endereco;
    let em = pessoa.email;
name = "ANÔNIMO"
objeto = {'nome':name,
'idade':year,
'email':em,
'endereco':end,}

    return objeto
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    let alt= [1.5]
    let idad= [14]
    let idos= [60]

    let array=[pessoas.nome, pessoas.idade, pessoas.altura,]
    arrayperm = array
    arraynoperm = array
    let arrayperm=['nome',nome, 'idade',idade =>14, 'altura',altura>1.5 ],
    let arraynoperm=['nome',nome, 'idade',idade >60, 'altura',altura<1.5 ]

   return arrayperm
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}