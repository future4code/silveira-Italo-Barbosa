1
//A: construtor serve para criar e iniciar um objeto de uma class

//B: uma vez

//C: acredito que apenas de dentro da class, externamente não.

  class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       newcpf: string,
       newname: string,
       newage: number,
    ) {
       console.log("Chamando o construtor class UserAccount")
       this.cpf = newcpf;
       this.name = newname;
       this.age = newage;
    }
  
  } 

  class Transaction {
    private date: string;
    private value: number;
    private description: string;
    
    constructor(newdate: string, newvalue: number, newdescription: string) {
      this.date = newdate;
      this.value = newvalue;
      this.description = newdescription
    }
  }

const A = new UserAccount("23265685656","A", 78)


public getName():void {
    console.log(this.nome)
}

public GetCPF():void {
    console.log(this.cpf)
        }
public GetAge():void {
    console.log(this.age)
        }

class Bank {
 private accounts: UserAccount[];
          constructor(accounts: UserAccount[]) {
            this.accounts = accounts;
            }
          
          }

const iti = new UserAccount("231232323213", "iti", 95)


// Após o plantão terminar eu obtive problemas com o código que apresenta -
// como se houve-se falhas de syntax.



























