

function Parenteses(val:any) {
   const box: string[] = [];
 
   for (let caract of val) {
     if (caract === "(" || caract === "[" || caract === "{") {
       box.push(caract);
     } else {
       const lastcaract = box.pop();
       if(!lastcaract) {
         return false
       } else if (
         (lastcaract === "(" && caract !== ")") ||
         (lastcaract === "[" && caract !== "]") ||
         (lastcaract === "{" && caract !== "}")
       ) {
         return false;
       }
     }
   }
 
   if (box.length > 0) {
     return false;
   }
 
   return true;
 }

 console.log(Parenteses("[]"))