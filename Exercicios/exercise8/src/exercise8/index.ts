

const matriz = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]

let a = 0
let b = 0
let letter = 0
let column = 0

let ans = 0

   const Negatives:any = (matriz:any) => {
          a=matriz.length,b=matriz[0].length, letter=0, column=b - 1,ans=0;
           while (letter < a) {
               while (column >= 0 && matriz[letter][column] < 0) column--;
               ans += b - column - 1;
               letter++;
           }
           return ans; 
       }
  
       console.log(Negatives(matriz))
