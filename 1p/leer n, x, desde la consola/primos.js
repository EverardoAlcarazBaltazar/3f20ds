



let a=prompt('hasta la cantidad');

for (var i = 2; i <= a; i++) {
	var primo = 1;
	var contador = 2;
	while(contador <= i/2 && primo) {
		if (i % contador === 0) {
			primo = 0;
		}
		contador++;
	}
	if( primo ) {
		document.write(i + "<br />");
	}
}