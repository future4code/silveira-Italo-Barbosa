
class Queue {
    constructor(
       public items: any[] = []
    ) { }
 
    public Empty = (): boolean => this.items.length === 0
 
    public queue = (
       value: any
    ): void => {
       const index = this.items.length
       this.items[index] = value
    }
 
    public queuede = (): ListNode | null => {
 
       const removedI = this.items[0]
 
       for (let i = 0; i < this.items.length; i++) {
          this.items[i] = this.items[i + 1];
       }
 
       this.items.length--
 
       return removedI
    }
 }