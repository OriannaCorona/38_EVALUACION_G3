/*Ejercicio 4:*/
function Persona (nombre, edad, genero) {
	this.nombre = nombre;
	this.edad = edad;
	this.genero = genero;
	this.getDetalles = function (){
		return nombre + edad + genero;
	};
}
var Estudiante = newPersona