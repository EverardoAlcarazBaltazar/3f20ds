
class Nodo
{
    constructor(dato, siguiente)
    {
        this.dato = dato;    
        this.siguiente = siguiente; 
    }
}

class le
{
    constructor()
    {
        this.inicio = null; 
        this.tamaño = 0; 
    }

    a(dato)
    {
        let nuevoNodo = new Nodo(dato,null); 
        if(!this.inicio) 
        {
            this.inicio = nuevoNodo 
        }
        else
        {
            let actual = this.inicio;
            while (actual.siguiente) 
            {
                actual = actual.siguiente; 
            }                           
            actual.siguiente = nuevoNodo;
        }
        this.tamaño++; 

    }
}

let lista = new le();
console.log("Vacíar : ", lista);


lista.a("primer");
lista.a("Segundo");
lista.a("Tercer")
console.log("Lista: ",lista)

