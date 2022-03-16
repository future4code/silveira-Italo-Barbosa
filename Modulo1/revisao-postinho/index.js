
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

function checarDesigualdade(a, b) {

    return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
}
console.log(checarDesigualdade(1, 3));

// b-)Compare a igualdade entre a===b

function checarIgualdade(a, b) {
    //  Sua lógica aqui
    return `Comparar Igualdade ${a}==${b} é ${a == b}`
}
console.log(checarIgualdade(1, 3))

// c-)Faça uma função chamada "verificaSeEMaior"
function verificaSeEMaior(a, b){
    a = 321
    b = 2156
    const maior = a > b;
    return `O ${a} é maior que ${b}? é ${maior}`

}
console.log(verificaSeEMaior(321, 2156));


// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'= false
// b-) 1=='1'= true
// c-) 'a'==='b'= false
// d-) 'b'>'a'= true
// e-) 0!==null= false


// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------

/*alert("Bem Vindoª!")
  if (Cadastro = confirm ("tens mais que 18 anos ? ok para sim e cancelar para não")){
 console.log("Vamos ao cadastro")
  }else {
	console.log("Perdão, não podes realizar o Cadastro")
}

const cadastro = () => {
    const usuario = []
    const nomeDoUsuario = prompt("qual seu nome ?")
    const anoDeNascimento = prompt("Nasceu em que ano ?")
    const senhaDoUsuario = prompt("Escreva uma senha de 6 digitos!")
    const nacionalidade = prompt("Sua nacionalidade é brasileira?")
    if(anoDeNascimento <= 2003 && 6 <= senhaDoUsuario.length && nacionalidade == "sim") {
        usuario.push(nomeDoUsuario)
      usuario.push(anoDeNascimento)
      usuario.push(senhaDoUsuario)
      usuario.push(nacionalidade)
        return "Obrigado pelos dados, você está cadastrado"
      }else{
       
              return"Desculpa seu cadastro não é possivel"
      
      }
     
      //  Sua lógica aqui

}
console.log(cadastro());

// Exercício 4-----------------------------------------------------------------------------------------------

const login = () => {
    const login = "labenu"
    //  Sua lógica aqui
    const senha = prompt("Sua senha ?")
    if (login == senha){
        console.log("Usuário Logado")
         }else {
           console.log("Senha Inválida")
       }
       
}

console.log(login());*/


/*const login = () => {
    const usuario = prompt("Seu usuario ?")
    const senha = prompt("Sua senha ?")
   
    //const login = "labenu"
    const usuarios = [
        {
            nome: "Artur",
            ano: 2000,
            nacionalidae: "brasileiro",
            senha: "123456",
            vacina: "pfizer",
            imunizacao: "incompleta"
        },
        {
            nome: "Bárbara",
            ano: 1984,
            nacionalidae: "brasileira",
            senha: "labenu",
            vacina: "astrazenica",
            imunizacao: "completa"
        },
        {
            nome: "Carlos",
            ano: 1999,
            nacionalidae: "brasileiro",
            senha: "123456",
            vacina: "coronavac",
            imunizacao: "incompleta"
        }
        ]
        
    //  Sua lógica aqui
    
    if (usuario === usuarios.nome  && senha === usuarios.senha){
        console.log("Bem vindo")
         }else {
           console.log("Usuario não encontrado")
       }
       const array = usuarios.filter((item, index, array) => {
        return item.nome == usuario})
       return array.usuario
}

console.log(login()); 

// Exercício 5----------------------------------------------------------------------------------------------------

const primeiraDose = () => {
let nome = prompt("Seu nome por favor")
let vacina = prompt("Qual vacina você tomou?")


    //  Sua lógica aqui
   
    switch (vacina) {
        case "Coronavac":
          dias = 28
          da = "12/04/2022"
          break;
        case "Astrazenica":
          dias = 90
          da = "13/06/2022"
          break;
        case "Pfizer":
          dias = 90
          da = "13/06/2022"
          break;
    
      }

  let tempo = dias
   let data = da
   
   if (vacina === "Coronavac"){
    return `Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`
     }else if(vacina === "Astrazenica"){
       return `Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`
   }else if(vacina === "Pfizer"){
       return `Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`
   }
   
  
}
console.log(primeiraDose())*/


// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------
const segundaDose = (nomeDoUsuario) => {
    
    const usuarios = [
            { nome: "Artur", imunizacao: "incompleta" },
            { nome: "Barbara", imunizacao: "incompleta" },
            { nome: "Carlos", imunizacao: "incompleta" }
        ]
        
    for (let usuario of usuarios) {
    if(usuario.nome == nomeDoUsuario){
        usuario.imunizacao = "completa"
        }
    }
     return usuarios
    }
    console.log(segundaDose("Barbara"))

// Exercício 7 --------------------------------------------------------------------------------------

const avisoAosAtrasados = () => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    //  Sua lógica aqui
    /*for (let usuario of usuarios) {
        if(usuarios.imunizacao == "incompleta"){
           console.log(`Olá ${usuarios.nome}! Sua imunização está ${usuarios.imunizacao}, por favor volte ao postinho para tomar a segunda dose`)
            }
        }
         return usuarios*/
         /**for (let i = 0 ; i < usuarios.length ; i++){
        if(usuarios[i].imunizacao !== "completa"){
            console.log (`Olá ${usuarios[i].nome}! Sua imunização está ${usuarios[i].imunizacao}, por favor volte ao postinho para tomar a segunda dose.`)
 */
         
         const array = usuarios.filter((item, index, array) => {
   
            return item.imunizacao === "incompleta"  
            
         })
         const novoArray = array.map((item, index, array) => {
            return `Olá ${item.nome}! Sua imunização está ${item.imunizacao}, por favor volte ao postinho para tomar a segunda dose.`
         })
return novoArray
        }


console.log(avisoAosAtrasados());


// DESAFIO------------------------------------------------------------------------------------------
const usuarios = [
    {
        nome: "Arthur",
        ano: 2000,
        nacionalidade: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidade: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 1999,
        nacionalidade: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }
    ]


const cadastroDesafio = () => {
    let usuario = {}
    const nomeDoUsuario = prompt("qual seu nome ?")
    const anoDeNascimento = prompt("Nasceu em que ano ?")
    const senhaDoUsuario = prompt("Escreva uma senha de 6 digitos!")
    const nacionalidade = prompt("Qual sua nacionalidade?")
    if(anoDeNascimento <= 2003 && 6 <= senhaDoUsuario.length && nacionalidade == "brasileira") {
        usuario={nome:nomeDoUsuario,
                ano:anoDeNascimento,
                senha:senhaDoUsuario,
                nacionalidade:nacionalidade,}
        console.log("Obrigado pelos dados.")
      }else{
       
              return"Desculpa seu cadastro não é possivel"
      
      }
      usuarios.push(usuario)
      return usuarios
}
console.log(cadastroDesafio());

const loginDesafio = () => {
    //  Sua lógica aqui
    const senh = prompt("Sua senha ?")
    for (let usuario of usuarios) {
        if(usuario.senha == senh){
          return "Bem vindo!"
            }
        }
        if(usuarios.senha !== senh){
            console.log("Usuario não enconstrado")
        }
        
}
console.log(loginDesafio());

const primeiraDoseDesafio = () => {
//  Sua lógica aqui

for (let usuario of usuarios) {
        usuario.vacina = "Coronavac"
        usuario.imunizacao = "incompleta"
        
        }
        return `Olá ${usuarios.nome}! Sua imunização está ${usuarios.imunizacao}, por favor volte ao postinho para tomar a segunda dose.`
    }
    



console.log(primeiraDoseDesafio())
const segundaDoseDesafio = () => {
    //  Sua lógica aqui
    for (let usuario of usuarios) {
        if(usuario.nome == "Carlos"){
            usuario.imunizacao = "completa"
            }
        }
         return usuarios

}
console.log(segundaDoseDesafio("Carlos"));

const avisoAosAtrasadosDesafio = () => {
    //  Sua lógica aqui
    
    for (let usuario of usuarios) {
        if(usuarios.imunizacao == "incompleta"){
           console.log(`Olá ${usuarios.nome}! Sua imunização está ${usuarios.imunizacao}, por favor volte ao postinho para tomar a segunda dose`)
            }
        }
}
console.log(avisoAosAtrasadosDesafio());