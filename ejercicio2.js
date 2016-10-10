/*Ejercicio 2:
-Solicitarle al usuaro que ingrese tres nombres.
-Mostrar "Ingresa nombre.", tres veces.
-Almacenar los nombres ingresados en un arreglo.
-Agregar los nombres al arreglo.
-Imprimir el arreglo de los tres nombres
*/
var nombres = [];
for (i=0; i<3; i++){
var datos = prompt("Ingresa el nombre"); 
var nuevosNombres = nombres.push (datos);
}
alert (nombres);

