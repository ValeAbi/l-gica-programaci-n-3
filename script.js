// Programa para calcular el factorial de un numero

// pedimos el numero al usuario y lo convertimos a number
let dato = prompt("Ingresa un numero:");
let numero = Number(dato);

// se repite mientras el dato no sea valido
while (
    dato === null ||
    dato.trim() === "" ||
    typeof numero !== "number" ||
    isNaN(numero) ||
    numero < 0 ||
    !Number.isInteger(numero)
) {
    alert("Error: debes ingresar un numero entero que no sea negativo");
    dato = prompt("Ingresa un numero:");
    numero = Number(dato);
}

// calculamos el factorial
let factorial = 1;
for (let i = 1; i <= numero; i++) {
    factorial = factorial * i;
}

// mostramos el resultado por consola y por el DOM
console.log("El factorial de " + numero + " es " + factorial);
document.getElementById("resultado").innerHTML = "El factorial de " + numero + " es " + factorial;