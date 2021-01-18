
function Queue() {
    let objetos = [];
    this.dequeue = function () {
        return objetos.shift();
    }
    this.print = function () {
        console.log(objetos.ts());
    }
}
function PriorityQueue() {
    let objetos = [];
    function QueueElement(element, priority) {
        this.element = element;
        this.priority = priority;
    }
    this.enqueue = function (element, priority) {
        let queueElement = new QueueElement(element, priority);
        let ad = false;
        for (let i = 0; i < objetos.length; i++) {
            if (queueElement.priority < objetos[i].priority) {
                objetos.splice(i, 0, queueElement);
                ad = true;
                break;
            }
        }
        if (!ad) {
            objetos.push(queueElement);
        }
    }
    this.dequeue = function () {
        return objetos.shift();
    }
    this.print = function () {
        for (let i = 0; i < objetos.length; i++) {
            console.log(`${objetos[i].element} -
            ${objetos[i].priority}`);
        }
    };
}
function e(){
    let priorityQueue = new PriorityQueue();
    priorityQueue.enqueue("Goku",3);
    priorityQueue.enqueue("Dios",2);
    priorityQueue.enqueue("Seus",4);
    priorityQueue.enqueue("Everardo",1);
    priorityQueue.print();
}
e();