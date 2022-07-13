import {Character} from "../src/model/characterInt"


export const validateChar = (input: Character): boolean => {
    if (
      !input.name ||
      input.life === undefined || 
      input.strength === undefined ||
      input.defense === undefined
    ) {
      return false
    }
  
    if (input.life <=0 || input.strength <=0 || input.defense <=0) {
      return false
    }
  
    return true
  }

  test("Return false for empty name", () => {
    const result = validateChar({
      name: "",
      life: 1200,
      strength: 100,
      defense: 600,
    })

    expect(result).toBe(false);
  })

  test("Return false for life 0", () => {
    const result = validateChar({
      name: "Chucknoris",
      life: 0,
      strength: 800,
      defense: 5700,
    })

    expect(result).toBe(false)
  })


  test("Return false for strength 0", () => {
    const result = validateChar({
      name: "Exterminator",
      life: 800,
      strength: 0,
      defense: 500,
    })

    expect(result).toBe(false)
  })


  test("Return false for defense 0", () => {
    const result = validateChar({
      name: "dogg",
      life: 260,
      strength: 3000,
      defense: 0,
    })

    expect(result).toBe(false)
  })

  test("Return false for stats negative", () => {
    const result = validateChar({
      name: "snoop",
      life: -1,
      strength: -1,
      defense: -1,
    })

    expect(result).toBe(false)
  })

  test("Return true for all valid", () => {
    const result = validateChar({
      name: "Goku",
      life: 8790,
      strength: 4567,
      defense: 100000,
    })

    expect(result).toBe(true)
  })


  export const performAttack = (attacker: Character, defender: Character) => {
    if (!validateChar(attacker) || !validateChar(defender)) {
      throw new Error("Invalid person")
    }
  
    if (attacker.strength > defender.defense) {
      defender.life -= attacker.strength - defender.defense
    }
  }

  export const Attack = (
    attacker: Character,
    defender: Character,
    validator: (input: Character) => boolean
  ) => {
    if (!validator(attacker) || !validator(defender)) {
      throw new Error("Invalid character");
    }
  
    if (attacker.strength > defender.defense) {
      defender.life -= attacker.strength - defender.defense
    }
  }


  test("Mock1", () => {
    const performAttack = jest.fn(() => {
			return true
		})
})

test("Mock2", () => {
    const performAttack= jest.fn(() => {
			return false
		})
})

test("PerformAttack", () => {
    const validatorMock = jest.fn(() => {
      return true;
    })

    const attacker: Character = {
      name: "Goku",
      life: 8790,
      strength: 4567,
      defense: 100000,
      
    }

    const defender: Character = {
      name: "Vegetta",
      life: 3450,
      strength: 1230,
      defense: 2890,
      
    }

    performAttack(attacker, defender)

    expect(defender.life).toEqual(1773)
    expect(validatorMock).toHaveBeenCalled()
    expect(validatorMock).toHaveBeenCalledTimes(2)
    expect(validatorMock).toHaveReturnedTimes(2)
  })

  test("Return invalid char", () => {
    expect.assertions(2);
    const validatorMock = jest.fn(() => {
      return false;
    })

    const attacker: Character = {
      name: "thirteen",
      life: 2540,
      defense: 4500,
      strength: 8900,
    }

    const defender: Character = {
      name: "",
      life: 500,
      defense: 200,
      strength: 900,
    }

    try {
      performAttack(attacker, defender)
    } catch (error) {
      expect(error.message).toBe("Invalid person")
      expect(validatorMock).toHaveBeenCalled()
      expect(validatorMock).toHaveBeenCalledTimes(0)
      expect(validatorMock).toHaveReturnedTimes(1)
    }
  })