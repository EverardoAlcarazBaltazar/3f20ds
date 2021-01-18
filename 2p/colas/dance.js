class colas {
    constructor() {
      this.queue = [];
    }
    enqueue(element) {
      this.queue.push(element);
      return this.queue;
    }
    dequeue() {
      return this.queue.shift();
    }
    print() {
      return this.queue;
    }
  }
  const queue = new colas();
  console.log('bailarines')
  console.log(queue.enqueue('Everardo'));
  console.log(queue.enqueue('Mikasa'));
  console.log(queue.enqueue('Goku')); 

  console.log(queue.dequeue()); 
  console.log(queue.print()); 
  console.log(queue.dequeue()); 
  console.log(queue.print()); 
  console.log(queue.dequeue()); 

