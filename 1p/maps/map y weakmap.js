var miMapa = new Map();

var claveObj = {},
    claveFunc = function () {},
    claveCadena = "cadena";


miMapa.set(claveCadena, "valor1'");
miMapa.set(claveObj, "valor2");
miMapa.set(claveFunc, "valor3");


document.write(miMapa.size+"<br>");


var wm1 = new WeakMap(),
    wm2 = new WeakMap(),
    wm3 = new WeakMap();
var o1 = {},
    o2 = function(){},
    o3 = window;

wm1.set(o1, 37);
wm1.set(o2, "azerty");

document.write(wm1);


/*
Map nos permite relacionar (mapear)
 unos valores con otros como si fuera un
  diccionario, en formato clave/valor.

  Los WeakMaps son similares a los Maps, pero con algunas diferencias:

    Un WeakMap solo acepta objetos como claves
    La referencia a las claves es débil, lo que significa que si no hay otras referencias al objeto que actúa como clave, el garbage collector podrá liberarlo.

*/