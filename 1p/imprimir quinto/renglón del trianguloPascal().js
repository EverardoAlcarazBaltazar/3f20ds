let n=5; 
let A=new Array(n);  
for (var i=1;i<=n;i++) {   
 A[i] = new Array(n);  
}  
for(i=1;i<=n;i++){  
 for(j=1;j<=i;j++){  
  A[i][j]=combina(i-1,j-1);  
 }  
}  
let texto='  ';  
for(i=1;i<=n;i++){  
 for(j=1;j<=i;j++){  
  texto+=A[i][j]+ "  ";  
 }  
 texto+= "<br> <br>";  
}  
document.getElementById("resultado").innerHTML =  
texto;  
function combina(p,q){  
 return  Math.round(fact(p)/(fact(q)*fact(p-q)));   
} 
function fact(h){  
    let  f=1;  
 if (h!==0){  
  for (k=1;k<=h;k++){  
   f*=k;  
  }  
 }  
 return f;  
}  