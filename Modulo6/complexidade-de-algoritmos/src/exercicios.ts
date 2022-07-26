
const findFirstRecurringCharacter = (input: string) => {
    const charMap = {} as string
    for (const char of input) {
      if (charMap[char] == true) {
        return char
      }
      charMap[char] = true;
    }
    return null;
  }

// Exercicio 1: O(n)


export const funct = (
    source: string,
    comparison: string
  ): boolean => {
    if (
      comparison.length > source.length + 1 ||
      comparison.length < source.length - 1
    ) {
      return false
    }
    let Quantity = 0
  
    for (const char of comparison) {
      if (source !== comparison) {
        Quantity++;
      }
    }
    return (
      Quantity <= source.length + 1 &&
      Quantity >= source.length - 1
    )
  }

// Exercicio 2: O(n²)


export const replaceValue = (
    matrix: number[][],
    rowIndex: number,
    columnIndex: number,
    value: number
  ): void => {
    if (
      matrix[rowIndex] === undefined ||
      matrix[rowIndex][columnIndex] === undefined
    ) {
      throw new Error("Fora do intervalo")
    }
  
    matrix[rowIndex][columnIndex] = value
  }

  // Exercicio 3: O(1)


  function verifyIfExistRepeatedNumbers(listNumbers: number[]): boolean {
    for (let i = 0; i < listNumbers.length; i++) {
      if (listNumbers.indexOf(listNumbers[i]) !== i) {
        return true
      }
    }
    return false
  }

  // Exercicio 4: O(n²)


  // Exercicio 5: 1, 4, 3, 2