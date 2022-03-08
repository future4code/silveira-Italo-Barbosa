/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
alert("Boas vindas ao jogo de Blackjack!")
  if (blackjack = confirm ("Gostaria de iniciar o jogo??")){
 console.log(" Vamos la!!")
  }else {
	console.log("O jogo acabou")
}

if(blackjack){
//Jogador1
   let jog1carta1 = comprarCarta()
   let jog1carta2 = comprarCarta()
//jogador2
   let jog2carta1 = comprarCarta()
   let jog2carta2 = comprarCarta()

   const pontuacao1 = jog1carta1.valor + jog1carta2.valor
   const pontuacao2 = jog2carta1.valor + jog2carta2.valor

   console.log(`Jogador - cartas, ${jog1carta1.texto}, ${jog1carta2.texto} - pontuação, ${pontuacao1}` )
   console.log(`Computador - cartas, ${jog2carta1.texto}, ${jog2carta2.texto} - pontuação, ${pontuacao2}` )

if(pontuacao1 > pontuacao2){
   console.log("O usuário ganhou!")
    }else if(pontuacao2 > pontuacao1) {
     console.log("O computador ganhou")
  }else if(pontuacao1 === pontuacao2){
     console.log("Empate, tente outra vez :D")
  }
//   switch (resultado) {
//    case (pontuacao1 > pontuacao2):
//      resposta = "O Jogador venceu!!!"
//      break;
//    case (pontuacao2 > pontuacao2):
//      resposta = "O Computador venceu!!!"
//      break;
//    case (pontuacao1 == pontuacao2):
//      resposta = "Empate, tente outra vez :D"
//      break;
//  }
//  console.log(resposta)
}
   