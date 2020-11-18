let start = new Date().getTime(),
output = 0 
for(let a=0;a<=6;a++){
    let text = ""; 
    let possible = "qwertyuiopñlkjhgfdsazxcvbnm";
      for (let i = 0; i < 7; i++) text += possible.charAt(Math.floor(Math.random() * possible.length)); 
     document.write(text);
     document.write("<br>");
     let text1 = ""; 
     output +=Math.random
      }
      let end = new Date().getTime()
      document.write(end - start+" seconds")