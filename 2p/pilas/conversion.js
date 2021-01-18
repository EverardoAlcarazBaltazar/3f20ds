
function Stack() {
this.dataStore = [];
this.top = 0;

this.push = function (funciones) {
        this.dataStore[this.top++] = funciones;
    }
this.pop = function () {
        return this.dataStore[--this.top];
    }
this.peek = function () {
        return this.dataStore[this.top - 1];
    }
this.length = function () {
        return this.top;
    }
this.clear = function () {
        this.top = 0;
    }
}
function mb(fijado, numbase) {
    var s = new Stack();
    do {
        s.push(fijado % numbase);
        fijado = Math.floor(fijado /= numbase);
    } while (fijado > 0);
    var convertidor = "";
    while (s.length() > 0) {
    convertidor += s.pop();
    }
return convertidor;
}
function print(funciones){
return console.log(funciones);
}
function result(){
let fijado = 100;
let numbase = 4;
let nuevofijado = mb(fijado, numbase);
print(fijado + " --> " + numbase + " = " + nuevofijado);
}
result();