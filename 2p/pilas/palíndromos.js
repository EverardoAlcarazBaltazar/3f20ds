function texto()
{
	var palabra=prompt("Escribe una palabra").toLowerCase();
	palabra=palabra.replace(/ /g, "");

	for (var i=0;i<palabra.length;i++){
		if(palabra[i]!=palabra[palabra.length-i-1]){
			return false;
		}
	}
	return true;
}
if(texto())
{
	alert("Es palíndromo");
}else{
	alert("No es palíndromo")
}