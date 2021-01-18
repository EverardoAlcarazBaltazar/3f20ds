let t1 = 1;
let t2 = 2;
let t3 = 3;
let s = 4;
function work(s, ori, des, aux) {
    if (s === 1)
        console.log("El disco " + s + " a Torre " + ori + " hasta la Torre " + des);
    else {
        work(s - 1, ori, aux, des);
        console.log("El disco " + s + " a Torre " + ori + " hasta la Torre " + des);
        work(s - 1, aux, des, ori);
    }
}
work(s, t1, t3, t2);