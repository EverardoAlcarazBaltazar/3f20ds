var mySet = new Set().add( 'foo' ).add( 'bar' );
 
console.info( mySet.size ); 
document.write( mySet.size ); 
document.write( "<br>" ); 

var ws = new WeakSet();
var obj = {};
var foo = {}; 


console.info( ws.size); 
document.write( ws.size ); 
/*La principal diferencia es que las referencias a objetos en Set son fuertes mientras que las referencias a objetos en WeakSet son débiles. Esto significa que un objeto en WeakSet puede ser recolectado como basura si no hay otra referencia a él.

Otras diferencias (o más bien efectos secundarios) son:

Los conjuntos pueden almacenar cualquier valor. Los WeakSets son solo colecciones de objetos.
WeakSet no tiene la propiedad de tamaño.
WeakSet no tiene claras, claves, valores, entradas, métodos forEach.
WeakSet no es iterable.*/