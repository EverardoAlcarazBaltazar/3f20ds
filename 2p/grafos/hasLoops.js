function print(element){
return console.log(element);
}class Graph {
constructor(h){
this.vertices = h;
this.edges = 0;
this.adj = [];
for(let x = 0; x < this.vertices; x++){
this.adj[x] = [];}}
ae(h, w){
this.adj[h].push(w);
this.adj[w].push(h);
this.edges++;}
sg(){ for(let x = 1; x < this.vertices; ++x){
let string = ""; 
string += ("" + x + " = ");
for (let k = 0; k < this.vertices; ++k) {
if (this.adj[x][k] != undefined){
string += (this.adj[x][k] + " "); }}
print(string); }}
hl(){for (let x = 0; x < this.adj.length; x++) {
for (let k = 0; k < this.adj[k].length; k++) {
let number = this.adj[x][k];
if(number === this.adj[x][k+1] && number != undefined){
print("el resultado es positivo");
return true;  } } }
print("el resultado es negativo");
return false;  }}function e(){
g = new Graph(5);
g.ae(0,1);
g.ae(0,2);
g.ae(1,3);
g.ae(2,4);
g.sg();
g.hl();
}e();
