class SC {
    constructor(du)
    {
        this.du = du;
    }
    ec()
   {
       this.du =  Number(prompt("Ingrese un numero"));
       while (this.du <  1 || this.du > 5)
       {
           alert("La matriz es de 5x5, ingresa de nuevo un dato");
           this.du = Number(prompt("Numero de colunma"))
       }
       return this.du;
   }
   sc(m)
   {
       let ind = this.du -1;
       console.log('columna ',this.du,':')
       let columna = m.map(function(m)
       {
           console.log(m[ind]);
       });
   }
}
let m = [[1,2,3,4,5],
        [6,7,8,9,10],
        [11,12,13,14,15],
        [16,17,18,19,20],
        [21,22,23,24,25]];
let miMatriz = new SC();
miMatriz.ec();
miMatriz.sc(m);
