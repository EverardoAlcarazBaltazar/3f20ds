class Node
{
    constructor(elm, next = null, prev=null){
        this.element = elm;
        this.next = next;
    }
}
class circularLinkedList
{
    constructor(){
        this.length = 0;
        this.head = null;
    }
    get = function(index)
    {
        if(index >= 0 && index <= this.length)
        {
            let node = this.head;
            for(let i = 0; i < index && node != null; i++)
            {
                node = node.next;
            }
            return node;
        }
        return undefined;
    }
    a = function(element)
    {
        const node = new Node(element);
        let current;

        if(this.head === null){
            this.head = node;
        }
        else
        {
            current = this.get(this.length - 1);
            current.next = node;
        }
        node.next = this.head;
        this.length++;
    }
    i = function(element, index)
    {
        if(index >= 0 && index <= this.length)
        {
            const node = new Node(element);
            let current = this.head;
            if(index === 0)
            {
                if(this.head === null)
                {
                    this.head = node;
                    node.next = this.head;
                }
                else
                {
                    node.next = current;
                    current = this.get(this.length);
                    this.head = node;
                    current.next = this.head;
                }
            }
            else
            {
                const previous = this.get(index - 1);
                node.next = previous.next;
                previous.next = node;
            }
            this.length++;
            return true;
        }
        return false;
    }
    toString = function()
    {
        let current = this.head,
            string = '';

        const temp = this.head.element;

        while(current)
        {
            if(temp === current.next.element)
            {
                string += current.element + (current.next ? '\n' : '');
                break;
            }
            string += current.element + (current.next ? '\n' : '');
            current = current.next;
        }
        return string;
    }
}
let lc = new circularLinkedList();
lc.i(1,0);
lc.i(2,1);
lc.i(3,2);
lc.i(4,3);
lc.i(5,4);
console.log("valores : \n",lc.toString())
console.log("lista : ", lc);
lc.i("posicion especifica",5)
console.log("Posición de  lista : ",lc.get(5));