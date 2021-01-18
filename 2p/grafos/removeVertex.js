
function print(element){
    return console.log(element);
}
class Graph {
    constructor(s){
        this.vertices = s;
        this.edges = 0;
        this.adj = [];
        for(let i = 0; i < this.vertices; i++){
            this.adj[i] = [];
        }}

    aE(s, w){
        this.adj[s].push(w);
        this.adj[w].push(s);
        this.edges++;
    }
    sg(){
        for(let i = 0; i < this.vertices; ++i){
            let string = ""; 
            string += ( i + " = ");
            for (let j = 0; j < this.vertices; ++j) {
                if (this.adj[i][j] != undefined){
                    string += (this.adj[i][j] + " ");
                }
            }
            print(string);
        }}
    rv(vertex){
        while(this.adj[vertex]){
            const adjVertex = this.adj[vertex].pop();
            if(adjVertex === null || adjVertex === undefined){
                break;
            }
            this.re(vertex, adjVertex);
        }
        delete this.adj[vertex];
        return print(`Vértice ${vertex} remoto`);
    }
    re(source, destination){
        this.adj[source] = this.adj[source].filter(vertex => vertex !== destination);
        this.adj[destination] = this.adj[destination].filter(vertex => vertex !== source);
        return print(`Borde = ${source}-${destination} = remoto`);
    }}
function e(){
    g = new Graph(5);
    g.aE(1,1);
    g.aE(0,2);
    g.aE(1,3);
    g.aE(2,4);
    g.sg();
    g.rv(2); 
  }
e();