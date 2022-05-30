

 const numeros : Number[] = [1, 2, 34, 80, 23, 43]

function obterEstatisticas(numeros:Number[]) {

   

    const numerosOrdenados = numeros.sort(
        (a: any, b: any) => a - b
    )

    let soma: any = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

console.log(obterEstatisticas(numeros))