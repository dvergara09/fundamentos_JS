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



