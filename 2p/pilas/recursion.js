class Stack {
    constructor() {
      this.stack = [];
    }
    push(element) {
      this.stack.push(element);
      return this.stack;
    }
    pop() {
        return this.stack.pop();
      }
  }
  const stack = new Stack();
var primero = prompt("Ingresa un valor a la pila");

  console.log(stack.push(primero)); 
  console.log(stack.push(primero+(1))); 
  console.log(stack.push(primero+(2)));

  console.log(stack.pop());
  console.log(stack.pop());
  console.log(stack.pop());
  
