
function isOneEdit(A: string, B: string): boolean {
   
if (Math.abs(B.length - A.length) > 1) return false


if (A.length > B.length) return A.includes(B)
if (B.length > A.length) return B.includes(A)


let charsCount = 0
for (let i = 0; i < A.length; i++) {
    if (A[i] !== B[i]) charsCount++
}

return charsCount === 1
}

console.log(isOneEdit("banana", "a"))