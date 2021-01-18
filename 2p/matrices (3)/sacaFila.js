class S
{
    c(dataUser)
    {
        this.dataUser = dataUser;
    }
    insert()
    {
        this.dataUser =  Number(prompt("Tecle un numero"));
        while (this.dataUser <  1 || this.dataUser > 5)
        {
            alert("La matriz tiene un rango de 5x5");
            this.dataUser = Number(prompt("Inserte un numero del 1 al 5"))
        }
        return this.dataUser;
    }

    imp(m)
    {
        let ind = this.dataUser - 1;
        console.log(this.dataUser,':', m[ind]);
    }
}
let m = new Array([1,2,3,4,5],
                 [6,7,8,9,10],
                 [11,12,13,14,15],
                 [16,17,18,19,20],
                 [21,22,23,24,25]);
let col = new S();
col.insert();
col.imp(m)