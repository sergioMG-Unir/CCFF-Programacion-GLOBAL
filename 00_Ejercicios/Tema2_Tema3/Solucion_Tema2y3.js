/*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Ejercicio 1
Calcular el area de un cuadrado */

console.log("\n===== Ejercicio 1 ========\n");

let ladoA = 8;
let ladoB = 8;
let area = ladoA * ladoB;
console.log("El ladoA es " + ladoA + " . El ladoB es " + ladoB);


console.log(">>El área del cuadrado es: " + area);


/*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Ejercicio 2
Convierte este string:  EsTo es Un EJEmplo  en el siguiente: ESTOESUNEJEMPLO */
console.log("\n===== Ejercicio 2 ========\n");

let cadena = "  EsTo es Un EJEmplo  ";

// Convierte todo a mayúsculas
cadena = cadena.toUpperCase();

// .split separa por cada espacio, y join los junta
//cadena = cadena.split(" ").join(""); 

/* 
.replace = .replace(selección,cambio)
Usamos una expresión regular que se compone de los siguientes puntos:
    / inicia la expresión regular, y además tiene un espacio que será el carácter que sustituirá. Si fuese /E, sustituiría la letra E.
    /g hace referencia a global, y selecciona en este caso todos los espacios.
    una vez hecho el regex, ponemos una coma y luego el string por el que sustituimos, en este caso nada.
*/

cadena = cadena.replace(/ /g,"");

console.log(cadena);

/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Ejercicio 3
Escribir un número y que me diga si es par o impar. */
console.log("\n===== Ejercicio 3 ========\n");

let numberExercise3 = 4;
console.log("El número que usamos es: " + numberExercise3);
if (numberExercise3 % 2 === 0) {
        console.log(">> Tu número es par");
    } else {
        console.log(">> Tu número es impar");
    }



/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Ejercicio 4
Escribir un número y que me diga si es positivo o negativo. El 0 se considera positivo. */
console.log("\n===== Ejercicio 4 ========\n");

let numberExercise4 = 4;
console.log("El número que usamos es: " + numberExercise4);
if (numberExercise4 >= 0) {
        console.log(">> Tu número es positivo");
    } else {
        console.log(">> Tu número es negativo");
    }




/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Ejercicio 5
// Dados dos numeros, escribe un codigo que devuelva la diferencia entre el mayor y el menor.
// Por ejemplo dados el 3 y el 8, debe devolver 5. */
console.log("\n===== Ejercicio 5 ========\n");

let numberExercise5A = 3;
let numberExercise5B = 8;

console.log("Los números que usamos son: " + numberExercise5A + " y " + numberExercise5B);

if (numberExercise5A === numberExercise5B) {
    console.log(">> Los dos números son iguales");
} else if (numberExercise5B > numberExercise5A){
    console.log(">> Tu número B es mayor que A");
} else {
    console.log(">> Tu número A es mayor que B");
};

differenceBetween = numberExercise5A - numberExercise5B;
differenceBetween = differenceBetween.toString();
differenceBetween = differenceBetween.replace("-","");
console.log(">> y la diferencia entre ambos es de " + differenceBetween + " números");


console.log("\n&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& \n ");

/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Ejercicio 3+4+5
Me aburro en casa y creo una combinación de los 3 últimos ejercicios, pero esta vez pidiendo input del usuario */
console.log("\n [EXTRA] ===== Ejercicio 3+4+5 ========\n");

// Módulo de node para poder preguntar por consola
const readline = require("readline");

// Constante que crea una interfaz del módulo readline. Así guardamos en una constante llamada rl lo que haya escrito.

const rl = readline.createInterface({
    // método que te regala el módulo, permite leer el contenido que ponga el usuario
    input: process.stdin,
     // método que permite mostrar el contenido que ha escrito el usuario
    output: process.stdout
});

/* 
Vamos a crear una función que nos lance una pregunta. Si el usuario introduce algo que no sea un numero, 
volverá a ejecutarse mostrando un mensaje de error hasta que introduzca un número. */

function askForNumbers() {
    /*.question es un método que ofrece el módulo de Readline. 
        Tras pedirle al usuario el número, lanzamos una función de validación que recogerá la excepción de error
    */ 
rl.question(">> Dime tu primer(1) número: ",
     function(firstNumber) {
        //try es la declaración de try..catch. 
        try {
            /*
            En el primer if, vemos si el usuario ha introducido un número.
            Para ello utilizamos isNaN (is not a number)
            Esto lanzará un error en caso de que sea verdad. 
            Este error se recogerá en el catch de abajo y volverá a lanzar la función.
            */
            if (isNaN(firstNumber)) {
                throw new Error("\n --- Por favor, introduce solo números");
            }
            rl.question(">> Dime el segundo(2) número: ", function(secondNumber) {
                try {
                    if (isNaN(secondNumber)) {
                        throw new Error("\n --- Por favor, introduce solo números");
                    }
            
            console.log("\n ---- Los números que has elegido son: " + firstNumber + " y " + secondNumber + " ---- \n");

            //Hemos sacado los resultados en funciones externas para que sea más cómodo
            console.log("\n ---- Ejercicio 3 ---- \n");
            greatOrLesser(firstNumber, secondNumber);

            console.log("\n ---- Ejercicio 4 ---- \n");
            oddOrEven(firstNumber, secondNumber);

            console.log("\n ---- Ejercicio 5 ---- \n");
            positiveOrNegative(firstNumber, secondNumber);

            // Cerramos el módulo de Readline al terminar la verificación
            rl.close();
        } catch (secondError) {
            console.error(secondError.message);
            askForNumbers(); // Ask for the second number again
        }
    });
        // Este es el catch que ejecutará el mensaje que definimos en el if y volverá a lanzar la función.
        } catch (firstError) {
            console.error(firstError.message);
            askForNumbers();
        }
    });
}

console.log( "Necesito que me digas dos números, y comprobaremos si son par, impares, positivos, negativos y cuál de ellos es mayor. \n");
//Tenemos que llamar la función para que se ejecute el ejercicio3
askForNumbers();

//Función de par o impar, del ejercicio 3
function oddOrEven(firstNumber, secondNumber) {
    if (firstNumber % 2 === 0 && secondNumber % 2 === 0) {
        console.log(`Tu número ${firstNumber} es par y ${secondNumber} también`);
    } else if (firstNumber % 2 === 0 && secondNumber % 2 !== 0) {
        console.log(`Tu número ${firstNumber} es par y ${secondNumber} es impar`);
    } else if (firstNumber % 2 !== 0 && secondNumber % 2 === 0) {
        console.log(`Tu número ${firstNumber} es impar y ${secondNumber} es par`);
    } else {
        console.log(`Tu número ${firstNumber} es impar y ${secondNumber} también`);
    }
}

//Función de positivo o negativo, del ejercicio 4
function positiveOrNegative(firstNumber, secondNumber) {
    if (firstNumber > 0 && secondNumber > 0) {
        console.log(`Tu número ${firstNumber} es positivo(+) y ${secondNumber} también`);
    } else if (firstNumber > 0 && secondNumber < 0) {
        console.log(`Tu número ${firstNumber} es positivo(+) y ${secondNumber} es negativo(-)`);
    } else if (firstNumber < 0 && secondNumber > 0) {
        console.log(`Tu número ${firstNumber} es negativo(-) y ${secondNumber} es positivo(+)`);
    } else {
        console.log(`Tu número ${firstNumber} es negativo(-) y ${secondNumber} también`);
    }
}

//Función para saber cuál es mayor o menor, del ejercicio 5
function greatOrLesser(firstNumber, secondNumber) {
    if (firstNumber > secondNumber) {
        console.log(`Tu número ${firstNumber} es mayor que ${secondNumber}`);
    } else if (firstNumber < secondNumber) {
        console.log(`Tu número ${secondNumber} es mayor que ${firstNumber}`);
    } else {
        console.log(`Tu dos números son iguales. ${firstNumber} y ${secondNumber}`);
    }
   let differenceBetween = firstNumber - secondNumber;
    if(differenceBetween <0){
        differenceBetween = differenceBetween * -1;
     }
    console.log("y la diferencia entre ambos es de " + differenceBetween + " números");
}