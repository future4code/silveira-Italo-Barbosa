
// Exercicio 1
const NumbersLogic = (number: number) => {
   if (number >= 0) {
     NumbersLogic(number - 1)
     console.log(number)
   }
 }


 const NumbersInlogic = (number: number) => {
   if (number >= 0) {
     console.log(number)
     NumbersInlogic(number - 1)
   }
 }

 console.log(NumbersInlogic(10))
 console.log(NumbersLogic(9))


// Exercicio 2

export const somavariavel = (number: number, cot: number = 0): number => {
   if (number === 0) {
     return cot
   }
   return somavariavel(number - 1, cot + number)
 }
 
 console.log(somavariavel(50))


// Exercicio 3


 export const caculavar = (number: number): number => {
   let logic = 0
    for (let i = 0 ; i <= number ; i++) {
         logic += i
   }
    return logic
 }

 console.log(caculavar(50))


// Exercicio 4

const array = [56, 78, 54, 22, 80, 100]
 export const arrayrun = (array: number[], index: number = array.length - 1) => {
   if (index >= 0) {
     arrayrun(array, index - 1)
     console.log(index, array[index])
   }
 }
 
 
 
console.log(arrayrun(array))
 