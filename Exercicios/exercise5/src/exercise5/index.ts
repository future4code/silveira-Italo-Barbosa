


let search: number[] = [2, 2, 1]



// const array = search.filter(function(index, two, load) {
//     return load.indexOf(index) == two;
// })

// console.log(array)

var run = search.filter(function(element, i) {
    return search.indexOf(element) === i;
});
console.log(run);

// Tentei mas me perdi nas logica.