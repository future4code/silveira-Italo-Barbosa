
const nome: string = "Italo"

const data: string = "23/12/2012"

function dados(nome:string, data:string){

const dia = data.split("/", 1)
const mes = data.split("/", 3-1)
const ano = data.split("/", 1-3)

return `Olá me chamo ${nome} nasci no dia ${dia} do mês de ${mes} do ano de ${ano}`
}

console.log(dados(nome, data))

// me perdi na função split