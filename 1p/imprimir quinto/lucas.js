let limit = 5;
let fibo = [2,1];

	for(i=2; i <= limit; i++){
		fibo.push(fibo[i-2] + fibo[i-1]);
		document.write(fibo[i]+"<br/>");	
	}