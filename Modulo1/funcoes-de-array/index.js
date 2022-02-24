/*const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" }
]

const novoArrayA = usuarios.map((item, index, array) => {
   console.log(item, index, array)
})*/

//Acredito que será impresso três arrays separando os tres nomes e seus apelidos
// tipo amanda mandi
//lais laura

//2

/*const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayB = usuarios.map((item, index, array) => {
     return item.nome
  })
  
  console.log(novoArrayB)*/
  
  //Acredito que seja impresso cada um dos itens do array um em cima do outro.

  /*const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayC = usuarios.filter((item, index, array) => {
     return item.apelido !== "Chijo"
  })
  
  console.log(novoArrayC)*/
  // faria uma nova impressão da array sem a leiticia presente.

 /* const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

  const novoArrayC = pets.map((item, index, array) => {
     return item.nome
  })
  
  console.log(novoArrayC)
   
  const novoArrayb = pets.filter((item, index, array) => {
    return item.raca == "Salsicha"
 })
 
 console.log(novoArrayb)

 const ArrayA = pets.filter((item, index, array) => {
   
    return item.raca === "Poodle"
    
 })
 const novoArrayA = ArrayA.map((item, index, array) => {

    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`
 })
 
 console.log(novoArrayA)*/


 const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
 const arrayA = produtos.map((item, index, array) => {
    return item.nome
 })

console.log(arrayA)

const arrayA2 = produtos.map((item, index, array) => {
    return {nome: item.nome, preco:(item.preco * 0.95).toFixed(2)}
 })

console.log(arrayA2)

const arrayB = produtos.filter((item, index, array) => {
    return item.categoria == "Bebidas"
 })
 
 console.log(arrayB)

 const arrayC = produtos.filter((item, index, array) => {
    return item.nome.includes("Ypê")
 })
 
 console.log(arrayC)

 const ArrayD = produtos.filter((item, index, array) => {
   
    return item.nome.includes("Ypê")
    
 })
 const novoArrayD = ArrayD.map((item, index, array) => {

    return `Compre ${item.nome} por ${item.preco}`
 })
 
 console.log(novoArrayD)