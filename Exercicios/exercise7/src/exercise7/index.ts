

const letter=[2, 7, 11, 15] 
const indic=26

let n = 0
let i = 0
let j = 0


  const dual:any = ( nums: any, target: any) => {
       n = nums.length;
       for ( i = 0; i < n; ++i) {
           for ( j = i + 1; j < n; ++j) {
               if (nums[i] + nums[j] == target) {
                   return [i, j];
               }
           }
       }
       return dual[0];
   }

   console.log(dual(letter, indic))