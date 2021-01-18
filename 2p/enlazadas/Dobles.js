class Node
{constructor(data, next, prev) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }};
class listaDobleEnlazada
{ constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }; adt(data)
    {const nevouNodo= new Node(data, this.head, null); 
if (this.head)                 
        { nevouNodo.next = this.head;  
            this.head.prev = nevouNodo;  
            this.head = nevouNodo;      }
        else {
            this.head = nevouNodo;   
            this.tail = nevouNodo;};
        this.size++; }; adt(data){
        const nuevoNodo = new Node(data, null, this.tail); 
        if (this.tail)   {
            nuevoNodo.prev = this.tail;   
            this.tail.next = nuevoNodo;   
            this.tail = nuevoNodo;         
        } else{
            this.tail = nuevoNodo;    
            this.head = nuevoNodo;};
        this.size++; };
    ia(data, index)
    {if (index < 0 || index > this.size)                   
        {
            return null
        };const newNode = new Node(data, null, null);   
        let current = this.head;      
        let previous;
        if (index === 0)
        {newNode.next = current;        
            current.prev = newNode;    
            this.head = newNode;         
        }else
        {for (let i = 0; i < index; i++)    
            {
                previous = current;             
                current = current.next;       
            };
            newNode.next =current; 
            newNode.prev = previous;
            current.prev = newNode;
            previous.next = newNode; 
        };                                  
        this.size++;
    };p()
    {
        let current = this.head;       
        let result = '';               
        while(current) {
            result += current.data + ' -> ';  
            current = current.next;          };
        return result += 'Nada';
    };rp() {
        let current = this.tail;        
        let result = '';
        while(current) {
            result += current.data + ' -> ';
            current = current.prev;     
        };
        return result += 'Nada';};}
const doubleLinkedList = new listaDobleEnlazada();
doubleLinkedList.adt(7);
doubleLinkedList.adt(4);
doubleLinkedList.adt(8);
doubleLinkedList.adt(1);
doubleLinkedList.ia(2, 0);
console.log("cabeza a cola :",doubleLinkedList.p())
console.log("cola a cabeza : ",doubleLinkedList.rp())
console.log(doubleLinkedList)

