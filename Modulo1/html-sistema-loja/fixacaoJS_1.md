```function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
let bonus = 100
let valorA = bonus * qtdeCarrosVendidos
let valorB = valorTotalVendas * 0.05
let valorC = valorA + valorB
let sal = 2000 + valorC
return sal
}
console.log(calculaSalario())```