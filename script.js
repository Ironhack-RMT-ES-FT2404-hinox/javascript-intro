console.log("Hola Mundo!")
// console.log SOLO imprime cosas en la consola para verificacion. NUNCA afecta el desenvolvimiento de el codigo.


// Variables


// declaración de variables: Crear la cajita
let hobby;

console.log(hobby) // JS abre la caja y revisa que hay dentro



// inicialización de variables: Darle valor a la cajita
hobby = "Videojuegos";

console.log(hobby)


// declarar e inicializar una variables
let otherHobby = "Padel";



console.log(otherHobby)


let lastHobby = hobby

console.log(lastHobby)



// cosas que no podemos o no debemos hacer al crear variables

// let 20cosas; // empezar con numeros
// let break; // usar palabras reservadas como nombre
// let mipeliculafavoritadelmundomundial; // NO DEBEMOS HACERLO
let miPeliculaFavoritaDelMundoMundial;


// let y const

let age = 30;
console.log(age)

age = 38;
console.log(age)


// creando una constante
const myName = "Jorge";
console.log(myName)


// myName = "Patricia"; // No podemos cambiar el valor de una constante


// otra palabra reservada para crear varaibles: var

// var nuevaVariables = "patata"
// console.log(nuevaVariables)

// var ocasiona lo que se llama hoisting
// var es una palabra original en JS 
// con ES6 se crearon let y const PARA reemplazar el uso de var
// aprenderemos por que luego



let variable1 = true;
console.log(typeof variable1)

let variable2 = "Xavi";
console.log(typeof variable2)

let variable3 = {name: "Ronnie"};
console.log(typeof variable3)

let variable4 = 8;
console.log(typeof variable4)

let variable5 = NaN; // Tipo de data Number. "Not a Number" es un valor numerico que representa que algo no es un numero
console.log(typeof variable5)

let variable6 = null; // Si es un tipo de data especifico. Tipo de data null
console.log(typeof variable6)

let variable7 = ["Alfonso", 20]; // Los arrays en JS son de tipo de data Object!
console.log(typeof variable7)

let variable8 = undefined;  // Si es un tipo de data especifico. Tipo de data undefined
console.log(typeof variable8)


// Strings

let fruit1 = "manzana"
let fruit2 = "pera"
let fruit3 = "banana"

// concatenando strings con operador +
// let recipe = "La receta lleva: " + fruit1 + ", " + fruit2 + ", " + fruit3

// interpolacion de strings ``
let recipe = `La receta lleva: ${fruit1}, ${fruit2} y ${fruit3}`
console.log(recipe)


let simpleWord = "kjadhkjabwkdjaskjdakwhdkjqnsdknkajwd";
//                ||||
//                0123

// notación de corchetes
console.log(simpleWord[0])
console.log(simpleWord[3])


console.log(simpleWord.length) // cantidad de caracteres


console.log(simpleWord[ simpleWord.length - 1 ]) // ultimo caracter



// Metodos de Strings : metodos son acciones especiales que yo puedo hacer con la data

let longWord = "bananaramawakawakaehehsamiramira"

// data.nombreDelMetodo()

console.log(longWord.charAt(0)) // buscar caracter por posición

console.log(longWord.indexOf("waka")) // busca posición de un caracter o subtexto. -1 es que no existe.

console.log(longWord.toUpperCase())

console.log(longWord.slice(10, 14))


// Numeros

let num1 = 2
let num2 = 6


// operaciones matematicas + - / * **


// operador modulo
console.log(num2 % num1) // 0. Es el restante de la posible division de el primer numero sobre el segundo.

// 2 + 2 + 2 = 6. Restante? 0

console.log(15 % 4) // Es 15 perfectamente divisible entre 4? 0 => SI - cualquier otro numero => NO

// 4 + 4 + 4 = 12. Restante? 3

console.log(87154723564 % 2) // 0. PAR
console.log(87154723565 % 2) // 1. IMPAR




// operadores de asignación

let myAge = 25;
console.log(myAge)

myAge = myAge + 1
console.log(myAge)

myAge += 1 // => myAge = myAge + 1
console.log(myAge)

myAge++ // => myAge = myAge + 1
console.log(myAge)


// Coercion en JS

console.log(3 + 5) // 8
console.log("3" + "5") // "35"

console.log(3 + "5") // Coercion. "35". Forza el numero a ser un string.
// 1. JS intenta usarlo como concatenacion
// 2. JS intenta usarlo como suma

console.log("5" - "2") // Coercion. Forza los strings a ser numeros. Puede hacerlo.
// operador (-) SOLO funciona como operador de resta

console.log("Javascript" - "Java") // Coercion.  Forza los strings a ser numeros. NO PUEDE. NaN
// operador (-) SOLO funciona como operador de resta

// metodos de numeros

let otroNumero = 1000;

console.log(otroNumero.toString())

// metodos de un objeto global Math


let randomNumber = Math.random() * 10 // entre 0 y 9.999999999999999
console.log(randomNumber)

console.log(Math.floor(randomNumber))

// let randomNumber = 1 + Math.random() * 6 // entre 1 y 6.999999999999999




console.log( Math.max(20, 100, 9, 12) )
console.log( Math.min(20, 100, 9, 12) )


// Booleanos


let boolVariable = true

// operador NOT
console.log(!boolVariable)


// comparacion

let veggie1 = "patata";
let veggie2 = "tomate";
let veggie3 = "patata";

// comparacion estricta
console.log(veggie1 === veggie2)
console.log(veggie1 === veggie3)
console.log(veggie1 !== veggie3)

// = NO ES LO MISMO QUE ===

// > < >= <=
console.log(30 >= 10)
console.log(30 <= 10)

console.log("5" === "5")
console.log("5" === 5) // false. === compara el tipo de data y el valor

// comparacion flexible o no estricta (no recomendada)
console.log("5" == 5) // true. Hace coercion de tipos de data hasta encontrar una en comun. Luego verifica el valor


// comparaciones de letras por sus codigo fuente

console.log("a" > "t") // false
console.log("x" > "b") // true


// operadores logicos

console.log(10 === 10 && 8 === 20)
//             true   &&   false 
// toda la operación es true solo si TODAS las comparaciones son true
// si al menos una comparacion es false, todo es false

console.log(30 < 10 || 8 > 10)
//            false  ||  false
// si al menos una comparacion es true, todo es true
// toda la operacion es false solo si TODAS las comparaciones son false

console.log("ACTIVIDAD ********")

console.log(true && false && true); 
console.log((11 % 3) === 2);
console.log(false || !false);
console.log(false || (false && true));
console.log(17 == '17'); 
console.log((100 + 23) === '123');
console.log('Hello' - 'llo');

// Part 2.

let statement = 'i love javaScript!';

console.log(statement.indexOf("I"))

let subStatement = statement.slice(7);
console.log(subStatement);

console.log(subStatement[0].toUpperCase())

subStatement.toUpperCase(); // JAVASCRIPT!

// NO SE HACE MODIFICACION SOBRE EL STRING ORIGINAL
console.log(subStatement); 

// JAVASCRIPT!
// javaScript!

// Si queremos reescribir la variable?
subStatement = subStatement.toUpperCase(); // JAVASCRIPT!



// conditionales


let naranjas = 0;

// en los condicionales SIEMPRE se resuelva la condicion como un BOOLEANO

// if (naranjas === 0) {
//   console.log("Te has quedado sin naranjas!")
// }

// if ( naranjas > 0 && naranjas <= 3) {
//   console.log(`Tengo ${naranjas} naranjas. Puedo hacer un zumo!`)
// }

// if (naranjas > 3) {
//   console.log(`Tengo ${naranjas} naranjas. Puedo hacer zumo para todos!`)
// }


if (naranjas === 0) {
  // si esta condicion es true, la ejecuta y DEJA de revisar las siguientes
  console.log("Te has quedado sin naranjas!")
} else if ( naranjas > 0 && naranjas <= 3) {
  // si esta condicion es true, la ejecuta y DEJA de revisar las siguientes
  console.log(`Tengo ${naranjas} naranjas. Puedo hacer un zumo!`)
} else if (naranjas > 3) {
  // si esta condicion es true, la ejecuta y DEJA de revisar las siguientes
  console.log(`Tengo ${naranjas} naranjas. Puedo hacer zumo para todos!`)
} else if (naranjas === 0) {
  console.log("patatas")
} else {
  // lo que ocurren cuando ninguna condicion se cumplio
  console.log("no entiendo lo que me pides. Se daño la maquina de zumos.")
}





// Thruthy & Falsy values


if (0 || "" || false || undefined || null || NaN) {
  console.log("esto se verá?")
}

// los numeors positivos y negativos los asume como un valor true. Aspecto thruthy
// el numero 0 lo asume como un valor false. Aspecto Falsy


/*
Data de aspecto falsy

0
""
false
undefined
null
NaN
*/


let username = "";


if (username) {
  console.log(`Bienvenido a mi pagina, ${username}`)
} else {
  console.log(`Bienvenido a mi pagina usuario desconocido!`)
}


// for Loops


// sintaxis


/* 

for ( 
  inicialización de la variable control;
  condicion de control (hasta cuando se ejecutará el bucle);
  expresión final (modificar la variable control, frecuencia del bucle);
) {
  codigo a ejecutar X cantidad de veces
}

*/

for ( let control = 20; control >= -10; control = control - 2) {

  // let control = 0 // ESTO SOLO OCURRE AL INICIO DEL BUCLE UNA VEZ

  // if (control < 20) continua el bucle // OCURRE EN CADA ITERACIóN

  console.log("patata", control)



  // control = control + 1 // OCURRE SIEMPRE AL FINAL DEL RESTO DEL CODIGO
  // inicia de nuevo este bloque
}



let lyrics = "Around the world, Around the world, Around the world, Around the world, Around the world, Around the world, Around the world, Around the world, Around the world, Around the world, Around the world, Around the world, Around the world, Around the world, Around the world, Around the world, Around the world"

let counter = 0;

console.log(lyrics.length)

for (let i = 0; i < lyrics.length; i++) {

  if (lyrics[i] !== " " && lyrics[i] !== ",") {
    // console.log("encontré una letra A")
    counter++
  }
  // console.log(lyrics[i])
}

console.log(counter + 1)
