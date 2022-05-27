const dati = new Date();
/*const dia = (dati.getDate()).padStart(2, '0');
const mes = (dati. getMonth() + 1).padStart(2, '0');*/
const ano = dati.getFullYear();





const anoNascimento = Number(prompt("Digite o ano de nascimento"))



function RenovarCarteira(ano: any, anoNascimento: any, ) {
    

    const idade = ano - anoNascimento
    const Carteira = ano - idade

    const rend1 = idade <= 20 && Carteira >= 5
    const rend2 = idade > 20 && idade <= 50 && Carteira >= 10
    const rend3 = idade > 50 && Carteira >= 15

    return (rend1 || rend2 || rend3)
 }

console.log(RenovarCarteira(ano, anoNascimento))