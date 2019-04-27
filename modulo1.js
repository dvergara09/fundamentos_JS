/** OPERACIONES CON STRING*/
var nombre = 'Daniel'
var apellido = 'Vergara'

//mayusculas y minusculas
var mayus= nombre.toUpperCase()
var minus= nombre.toLowerCase();

//primera leta de una cadena
var primeraLetra = nombre.charAt(0)
//cantidad de letras de una cadena 
var cantidad = nombre.length

//forma para concatenar variables mas recomendable
var nombreCompleto = `${nombre} ${apellido}`
//dentro de las {} podemos incluir codigo JS
var nombreCompletoMayus = `${nombre} ${apellido.toUpperCase()}`

//hallar substring: substr recibe desde donde queremos empezar y cuantos caracteres queremos usar

var str = nombre.substr(1,2)

//OPERACIONES CON NUMEROS
var edad = 27;
//incremento
edad = edad +1
edad += 1
//disminuir 
var peso = 79
peso = peso - 2
peso -= 2
var sandwich = 1
peso = peso + sandwich
var precio = 200.3
//var total = precio*100*3/100 //para cuentas faciles
var total = Math.round(precio*100*3)/100
var totalstr = total.toFixed(2) //mostrar decimales
var pizza = 8
var persona = 2
var cantidadPizza = pizza / persona

/**FUNCIONES */
var nombre = 'Daniel Vicente', edad = 22

function imprimirEdad(n,e){
    console.log(`${n} tiene ${e} años`)
}
//imprimirEdad(nombre,edad);

/**ALCANCE FUNCIONES */

/* function imprimirNombreMayus(n){
    n = n.toUpperCase()
    console.log(n)
}
 */
//imprimirNombreMayus(nombre)

/**OBJETOS */
var daniel = {
    nombre: 'Juan',
    apellido: 'Vergara',
    edad: 27
}

/* function imprimirNombreMayus({ nombre }){
    console.log(nombre.toUpperCase())
}
 */

//imprimirNombreMayus(daniel)

/**DESESTRUCTURAR OBJETOS */
function imprimirNombreMayus(persona){
    var { nombre } = persona
    console.log(nombre.toUpperCase())
}
//imprimirNombreMayus(daniel)

function imprimirNombreEdad(persona){
    var {nombre} = persona
    var {edad } = persona
    console.log('Hola me llamo '+nombre+' y tengo '+edad+' años')
}

//imprimirNombreEdad(daniel)

function cumpleanio(persona){
    return{
        ...persona, //copiamos todo el objeto anterior para crear uno nuevo
        edad: persona.edad + 1 //modificamos un parte del objeto anterior pero en el nuevo
    }
    
}
//cumpleanio(daniel)

/**COMPARACIONES JS */
var x = 4, y = '4' 
// == es para validar que ambos son iguales
// === valida que sean completamente iguales y que tengan el mismo tipo de dato
// se recomienda siempre usar el === 

var daniel = {
    nombre: 'Daniel'
}

var otraPersona = {
    nombre: 'Daniel'
}



