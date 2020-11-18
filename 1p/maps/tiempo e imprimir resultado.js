let start = new Date().getTime()

var mimap = ["Everardo", "Jose","Armando", "Felipe" ,"Hugo", "Hernan", "Carlos", "Ramon", "Juana", "Alejandra"];

let k = 10;
let limit = 6; 
for(a=1;a<=limit;a++){
num1 = Math.floor((Math.random() * k) + 0); 

document.write(mimap[num1]+"<br>");
}
let end = new Date().getMilliseconds()
document.write(end - start+" Milliseconds")