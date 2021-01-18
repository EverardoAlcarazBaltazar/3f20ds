
class Traspo
{
    constructor() {}
    t (M)
    {
        let T = M[0].map((_, colIndex)=>M.map(row => row[colIndex]))
        console.log("Primera matriz : ", M)
        console.log(M.toString())
        console.log("Matris transpuesta :", T);
        console.log(T.toString());

    }
}
let m =      [[4,3,1],
             [8,6,0],
             [2,9,7]];
let a = new Traspo();
a.t(m);