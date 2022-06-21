export interface Client {
    name: string;
    registrationNumber: number;
    consumedEnergy: number;
    calculateBill(): number;
  }

  const client: Client = {
    name: "C1",
    registrationNumber: 923,
    consumedEnergy: 896,
  
    calculateBill: () => {
      return 56;
    }
    
  }

  console.log(client.name, client.registrationNumber, client.consumedEnergy, client.calculateBill())
  
  //2-1
  //A: imprimi todas

  export abstract class Place {
    constructor(protected cep: string) {}
  
      public getCep(): string {
          return this.cep;
    }
  }

 //const error = new Place("23231321313123")

//2-2

//A: não é possivel criar uma instancia de um class abstrata

//B: criando baby

//2-3 

//A: porque precisa que a instrução seja protected ???

//B: é abstrata porque é coberta por outras class ??

export class Residence extends Place {
    constructor(
      protected residentsQuantity: number,
   
      cep: string
    ) {
      super(cep);
    }
    public getResidentsQuantity(): number {
        return this.residentsQuantity
      }
  }

  export class Commerce extends Place {
    constructor(
      protected floorsQuantity: number,
  
      cep: string
    ) {
      super(cep);
    }
    public getFloorsQuantity(): number {
        return this.floorsQuantity;
      }
  }

  export class Industry extends Place {
    constructor(
      protected machinesQuantity: number,  
      
      cep: string
          ) {
          super(cep);
    }
    public getMachinesQuantity(): number {
        return this.machinesQuantity;
      }
  }

//2-4

  class ResidentialClient extends Residence implements Client {
    constructor(
      public name: string,
      public registrationNumber: number,
      public consumedEnergy: number,
      private cpf: string,
      residentsQuantity: number,
      cep: string
    ) {
      super(residentsQuantity, cep)
    }
  
    public getCpf(): string {
      return this.cpf
    }
  
    public calculateBill(): number {
      return this.consumedEnergy * 0.75
    }
  }

  //A: super porque é obrigatorio para puxar o construtor da class pai, private apenas para o cpf que é um informação sensivel.

  //2-5

  class CommercialClient extends Commerce implements Client {
    constructor(
      public name: string,
      public registrationNumber: number,
      public consumedEnergy: number,
      private cnpj: string,
      floorsQuantity: number,
      cep: string
    ) {
      super(floorsQuantity, cep)
    }
  
    public calculateBill(): number {
      return this.consumedEnergy * 0.53
    }
  
    public getCnpj(): string {
      return this.cnpj
    }
  }

  //A: a semelhante está na estrutura

  //B: apenas em sua extensão

//2-6

class IndustrialClient extends Industry implements Client {
    constructor(
      public name: string,
      public registrationNumber: number,
      public consumedEnergy: number,
      private insdustryNumber: string, 
      machinesQuantity: number,
      cep: string
    ) {
      super(machinesQuantity, cep)
    }
    public getIndustryNumber(): string {
      return this.insdustryNumber
    }
    public calculateBill(): number {
      return this.consumedEnergy * 0.45 + this.machinesQuantity * 100
    }

   


  }

//A: deve ser filha de industry, porque é a class feita para ela

//B: Client, porque é um ciente só que de modalidade diferente.

//C: porque só queremos pegar dados e não alteralos ou definir eles ????

