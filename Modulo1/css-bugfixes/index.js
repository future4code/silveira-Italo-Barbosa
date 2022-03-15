let ex = 10
let p1 =9
let p2 = 9

function calculaNota(ex, p1, p2) {
    // Escreva seu código aqui
   let not = (ex * 1) + (p1 * 2) + (p2 * 3)
   
    let nota = not / 6
    
    if( nota >= 9) {
      return  "A"
    }else if(nota < 9 && nota >= 7.5 ){
     
            return "B"
    
    }else if(nota < 7.5 && nota >= 6){
        return "C"
    }else{
      return "D"
    }
    
    
  
    
  }
  
  console.log(calculaNota())