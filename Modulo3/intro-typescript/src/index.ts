
const a: Number = 2
const b: Number = 1
const c: Number = 4


function checaTriangulo(a:Number, b: Number, c:Number) {
    if (a !== b && b !== c) {
      return "Escaleno";
    } else if (a === b && b === c) {
      return "Equilátero";
    } else {
      return "Isósceles";
    }
  }


console.log(checaTriangulo(a, b, c))



/*function imprimeTresCoresFavoritas() {
    const cor1: string = prompt("Insira sua primeira cor favorita")
    const cor2: string = prompt("Insira sua segunda cor favorita")
    const cor3: string = prompt("Insira sua terceira cor favorita")
    console.log([cor1, cor2, cor3])
 }

 console.log(imprimeTresCoresFavoritas())
*/

const ano: Number = 2028

 function checaAnoBissexto(ano:any) {
    const cond1: boolean  = ano % 400 === 0
    const cond2: boolean  = (ano % 4 === 0) && (ano % 100 !== 0)
    return cond1 || cond2
 }

 console.log(checaAnoBissexto(ano))

const num1: Number = 2
const num2: Number = 25

    function comparaDoisNumeros(num1: Number, num2: Number) {
      let maiorNumero: any;
      let menorNumero: any;
    
      if (num1 > num2) {
        maiorNumero = num1;
        menorNumero = num2;
      } else {
        maiorNumero = num2;
        menorNumero = num1;
      }
    
      const diferenca = maiorNumero - menorNumero;
    
      return diferenca 
    }
  
    console.log(comparaDoisNumeros(num1, num2))

const anoAtual: Number = 2022
const anoNascimento: Number = 1990
const anoEmissao: Number = 2013 // apenas um teste sem prompt
    function checaRenovacaoRG(anoAtual: any, anoNascimento: any, anoEmissao: any) {
        /*const anoAtual = Number(prompt("Digite o ano atual"))
        const anoNascimento = Number(prompt("Digite o ano de nascimento"))
        const anoEmissao = Number(prompt("Digite o ano de emissão do documento"))*/
     
        const idade = anoAtual - anoNascimento
        const tempoCarteira = anoAtual - anoEmissao
     
        const cond1 = idade <= 20 && tempoCarteira >= 5
        const cond2 = idade > 20 && idade <= 50 && tempoCarteira >= 10
        const cond3 = idade > 50 && tempoCarteira >= 15
     
        return (cond1 || cond2 || cond3)
     }

console.log(checaRenovacaoRG(anoAtual, anoNascimento, anoEmissao))
     