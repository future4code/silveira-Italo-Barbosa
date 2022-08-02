

class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;
  
    constructor(
          id: string,
          email: string,
          name: string,
          password: string
      ){
          console.log("Chamando construtor classe User")
          this.id = id
          this.email = email
          this.name = name 
          this.password = password
      }
  
	public interoduceYourself(): string {
        return `Olá, sou ${this.name}. Bom dia!`
     }

      public getId(): string {
          return this.id
      }
  
      public getEmail(): string {
          return this.email
      }
  
      public getName(): void {
          console.log(this.name)
      }

      public getPassword(): string {
        return this.password
      }
  }
 
  const a = new User("a1", "tatat@hotmail.com", "a", "tamtamtamtam")

//1
//A: sim
//B: uma

class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      creditCard: string
    ) {
      super(id, email, name, password);
      console.log("Chamando construtor classe Customer");
      this.creditCard = creditCard;
      this.purchaseTotal
      
    }
  
    public getCreditCard(): string {
      return this.creditCard;
    }
    public getPurchaseTotal(): number {
        return this.purchaseTotal
    }
  }

  //2
  
  //A: duas

  //B: duas

  const B = new Customer("B1", "bombombom@hotmail.com", "B", "shshshshshs", "565656")

  //3

 //A: não porque password é private

// 4

const customer = new Customer("B2", "bambumbim@hotmail.com", "Ba", "tattatata", "232324142")

	



