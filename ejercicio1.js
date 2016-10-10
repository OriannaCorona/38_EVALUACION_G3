/*Ejercicio 1:
-Solicitarle al usuario que selecione entre 
piedra papel o tijeras.
-Mostrar "Selecciona entre piedra, papel o tijeras".
-Leer seleccion.
-Solicitarle al segundo usuario que selecione entre 
piedra papel o tijeras.
-Mostrar "Selecciona entre piedra, papel o tijeras".
-Leer seleccion.
-Si la respuesta del usuario 1 es igual a la del usuario 2, muestra "Empate."
-Si la respuesta del usuario 1 es piedra la del usuario 2 es papel, muestra "Gana jugador 2".
-Si la respuesta del usuario 2 es piedra la del usuario 1 es papel, muestra "Gana jugador 1".
-Si la respuesta del usuario 1 es tijeras la del usuario 2 es papel, muestra "Gana jugador 1".
-Si la respuesta del usuario 2 es tijeras la del usuario 1 es papel, muestra "Gana jugador 2".
-Si la respuesta del usuario 1 es tijeras la del usuario 2 es piedra, muestra "Gana jugador 2".
-Si la respuesta del usuario 2 es tijeras la del usuario 1 es piedra, muestra "Gana jugador 1".
*/
i=0;
var nombre1 = prompt ("Hola jugador uno, ingresa tu nombre");
var nombre2 = prompt ("Hola jugador dos, ingresa tu nombre");
for (i=0; i<3; i++){
var jugador1 = prompt (nombre1 + " selecciona entre piedra, papel o tijeras");
var jugador2 = prompt (nombre2 + " selecciona entre piedra, papel o tijeras");
	if (jugador1==="piedra" && jugador2==="papel"){
			alert("Gana " + nombre2);
		}else if (jugador2==="piedra" && jugador1==="papel"){
			alert("Gana " + nombre1);
		}else if (jugador1==="papel" && jugador2==="tijeras"){
			alert("Gana " + nombre2);
		}else if (jugador2==="papel" && jugador1==="tijeras"){
			alert("Gana " + nombre1);
		}else if (jugador1==="tijeras" && jugador2==="piedra"){
			alert("Gana " + nombre2);
		}else if (jugador2==="tijeras" && jugador1==="piedra"){
		alert("Gana " + nombre1);
	}else{
		alert("Empate");
	}	
}


