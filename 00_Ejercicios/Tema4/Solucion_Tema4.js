/**
 * Escribe el codigo necesario para sumar los primeros 100 numeros pares
 * ES OBLIGATORIO USAR BUCLES (el que prefieras)
 * OJO: Se pide sumar los primeros 100 pares, y no sumar los pares hasta el 100
 */
console.log("\n===== Ejercicio 1 ========\n");

let suma = 0;
let contador = 0;

for (let numero = 1; contador < 100; numero++) {
  if (numero % 2 === 0) {
    suma += numero;
    //console.log("Suma del bucle: " + suma + "\n");
    contador++;
    //console.log("while contador " + contador + "/100");
    //console.log(numero + " " + suma);
  }
}

console.log("\n> La suma de los primeros 100 números pares es:", suma, "\n");


console.log("\n===== Ejercicio 2 ========\n");
/**
 * Dado el siguiente array mixto, se pide invertirlo. Es decir, que sus componentes queden en orden contrario
 * ES OBLIGATORIO USAR BUCLES (el que prefieras)
 * [1,2,3] -> [3,2,1]
 */

let array1 = ["a", 1, 0, 30.0, true, new Date()];
let array1inverted=[];

console.log(">>En el array 1 tenemos", array1);

for (let i=array1.length-1; i >= 0; i--){

    array1inverted.push(array1[i]);
    //console.log("En el array 2", i, "tenemos", array1inverted[i]);

}

console.log(">>Y ahora invertimos el array 1", array1inverted);

console.log("\n===== Ejercicio 3 ========\n");

/**
 * Dado un array de numeros, escribe el codigo necesario para mostrar por pantalla el valor medio
 * ES OBLIGATORIO USAR BUCLES (el que prefieras)
 * * [1,2,3] -> 2
 */
let array3 = [2,6,10,4,8,];
let array3Average = 0;


for (let i=0; i <= array3.length-1; i++){

  //console.log("suma",array3[i], "+", arrayAverage);
  array3Average = array3[i] + array3Average;
  //console.log(arrayAverage, "\n");

}
array3Average = array3Average / array3.length;
console.log("Valor medio de", array3, "es", array3Average, "\n");



console.log("\n===== Ejercicio 4 ========\n");

/**
 * Dado un array de numeros, escribe el codigo necesario para mostrar por pantalla el numero mas grande en valor absoluto.
 * Recordemos que el valor absoluto de un numero positivo es el mismo numero positivo, y el de un numero negativo es su valor multiplicado por -1
 * ES OBLIGATORIO USAR BUCLES (el que prefieras)
 * * [-1,-4,3,-5] -> -5 (lo devolvemos con signo)
 */
let array4 = [-1,-4,3,-5]
let array4bigger = 0;

for(let i=0; i<=array4.length-1; i++){

  if (Math.abs(array4bigger) < Math.abs(array4[i])) {
    array4bigger = array4[i];
  } 

}

console.log("Número absoluto más grande de", array4, "es", array4bigger);

