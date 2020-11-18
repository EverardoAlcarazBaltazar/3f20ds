let start = new Date().getTime();

let p2=0;
let n = 123;
for(let a=0;a<=9999;a++){
    var num1 = Math.floor((Math.random() * n) + 0); 
  
    document.write(num1);
    p2++;
}
document.write("<br>");
document.write("spets = "+p2);
console.log(p2);

let end = new Date().getTime()
document.write("<br>");
document.write(end - start+" mls");


/*
¿cuantas inversiones requiere cada uno en promedio?
10000
¿cuantas tiempo toma cada uno en promedio?
8 mls 
¿podemos mejorar el tiempo de ejecución? ¿cómo?
volviendolo recursivo
*/