


export const string = (input: string) => {
    const strings = [];
    let Char = input[0];
    let Count = 0;
  
    for (const char of input) {
      if (char !== Char) {
        strings.push(Char + Count);
        Char = char;
        Count = 0;
      }
      Count++;
    }
  
    strings.push(Char + Count);
    let result = "";
    for (const key of strings) {
      result += key;
    }
  
    return result.length > input.length ? input : result;
  };

  console.log(string("up"))