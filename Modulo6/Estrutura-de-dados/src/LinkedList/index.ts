

export class Linked {
    constructor(public start?: LinkedNode) {}
  
    public appendTail(value: number) {
      if (!this.start) {
        this.start = new LinkedNode(value)
      } else {
        let node: LinkedNode = this.start
        while (node && node.getNext() !== undefined) {
          node = node.getNext()!
        }
        node.setNext(new LinkedNode(value))
      }
    }
  
    public print(): void {
      let node: LinkedNode | undefined = this.start
      let i = 1
      while (node !== undefined) {
        console.log(`Elemento ${i}: `, node!.getData())
        node = node!.getNext()
        i++
      }
    }
  }

  