function print(element){
    return console.log(element);
}class Graph {
    constructor(v){
        this.vertices = v;
        this.edges = 0;
        this.adj = [];
        for(let i = 0; i < this.vertices; i++){
            this.adj[i] = [];
        }
    }ae(v, w){
        this.adj[v].push(w);
        this.adj[w].push(v);
        this.edges++;
    }sg(){
        for(let i = 0; i < this.vertices; ++i){
            let string = ""; 
            string += ("" + i + " = ");
            for (let j = 0; j < this.vertices; ++j) {
                if (this.adj[i][j] != undefined){
                    string += (this.adj[i][j] + " ");
                }
            }
            print(string);
        }
    }re(source, destination){
        this.adj[source] = this.adj[source].filter(vertex => vertex !== destination);
        this.adj[destination] = this.adj[destination].filter(vertex => vertex !== source);
        return print(`Borde ${source}-${destination} remota`);
    }
}function e(){
    g = new Graph(5);
    g.ae(1,1);
    g.ae(2,2);
    g.ae(1,3);
    g.ae(2,4);
    g.sg();
    g.re(0,2);
    g.sg();
}
e();
