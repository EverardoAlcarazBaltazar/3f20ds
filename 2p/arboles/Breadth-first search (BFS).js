class Node {
    constructor(d){
        this.d = d;
        this.chil = [];}}
class Tree {
    constructor() {
      this.root = null;}
    addNode(d, tnd)  {
      const n = new Node(d);
      const p = tnd ? this.fBFS(tnd) : null;
      if(p)
      p.chil.push(n);
      else
        if(!this.root)
          this.root = n;
        else
          return }
    fBFS(d) {
      const queue = [this.root];
      let _n = null;
      this.traverseBFS((n) => {
        if (n.d == d)
          _n = n;
      })
      return _n;}
    traverseBFS(cb) {
      const queue = [this.root]
      if(cb)
        while(queue.length) {
          const node = queue.shift();
          cb(node)
          for(const child of node.chil)
            queue.push(child)}}}
function e(){
    let tree = new Tree();
    tree.addNode('Everardo');
    tree.addNode('Goku', 'Everardo');
    tree.addNode('Mikasa', 'Everardo');
    tree.addNode('Eren', 'Goku');
    tree.traverseBFS((n) => {console.log('Current Node: ', n)});
    tree.fBFS("Node 1")}
e();