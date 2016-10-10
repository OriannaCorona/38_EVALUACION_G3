/*Ejercicio 3:
-Solicitarle al usuaro que ingrese la oracion a probar.
-Eliminar los espacios de la oracion.
-Determinar la cantidad de letras.
-Convertir las letras a minusculas.
-Comparar la primera letra con la ultima y asi hasta el centro.
-Si las letras de fuera hacia adentro coinciden, mostrar "Es palindromo".
-Si las letras de fuera hacia adentro no coinciden, mostrar "No es palindromo".
*/

function definirPalindromo(palabra){
	var frase = palabra.replace(/\s/g,"");
	for (var i=0; i<=frase.length; i++){
		var x = frase[i].toLowerCase();
		var y = frase[frase.length - (i+1)].toLowerCase();
		if (x!==y){
			alert ("No es un palindromo");
		}	
	}alert ("Es un palindromo c:");		
}
definirPalindromo (prompt("Ingresa la frase"));