let r = prompt("Ingresa el numero");
for(let a=1;a<=r;a++){
    let text = ""; 
    let possible = "qwertyuiopñlkjhgfdsazxcvbnm";
      for (let i = 0; i < 7; i++) text += possible.charAt(Math.floor(Math.random() * possible.length)); 
     document.write(text);
     document.write("<br>");
     let text1 = ""; 
      }