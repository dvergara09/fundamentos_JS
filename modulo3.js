
/**ARRAYS */
var daniel = {
    nombre: 'Daniel',
    apellido: 'Vergara',
    altura: 1.72,
    cantidadDeLibros: 111
}

var daniela = {
    nombre: 'Daniela',
    apellido: 'Suarez',
    altura: 1.86,
    cantidadDeLibros: 78
}

var mileidys = {
    nombre: 'Mileidys',
    apellido: 'Aldana',
    altura: 1.85,
    cantidadDeLibros: 132

}

var maria = {
    nombre: 'Maria',
    apellido: 'Siciliani',
    altura: 1.71,
    cantidadDeLibros: 90

}

var marcela = {
    nombre: 'Marcela',
    apellido: 'Dominguez',
    altura: 1.56,
    cantidadDeLibros: 91

}

var dayana = {
    nombre: 'Dayana',
    apellido: 'Dominguez',
    altura: 1.76,
    cantidadDeLibros: 182

}

const esAlta = ({ altura }) => altura > 1.8
const esBaja = ({ altura }) => !esAlta({ altura })

var personas = [daniel, daniela,mileidys,maria,marcela,dayana]

/* for(var i = 0; i < personas.length; i++){
    var persona = personas[i]
    console.log(`${persona.nombre} mide ${persona.altura}mts`)
} */

/**FILTRAR ELEMENTOS */
var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)

console.log(personasBajas)

/**TRANSFORMAR ARRAY */

/* const alturaCm = persona =>{
    // persona.altura = persona.altura * 100
    return {
        ...persona,
        altura: persona.altura * 100
    }
}
 */

/**asi evitamos modificar el array original */
const alturaCm = persona =>({
    ...persona,
    altura: persona.altura*100
})

var personaCm = personas.map(alturaCm)

console.table(personaCm) //se imprime el objeto como una tabla

/**REDUCIR ARRAY */
//sin reduce
/* var contador = 0
for (var i = 0; i< personas.length; i++){
    contador = contador+personas[i].cantidadDeLibros
}
console.log(contador) */

/**Primero desestructuramos el array personas tomando solo la cantidad de libros
 * tambien podemos eliminar las llaves y el return del arrow function porque 
 * solo se realiza una sola accion
 */

const reducer = (acum, { cantidadDeLibros }) => acum + cantidadDeLibros

var totalLibros = personas.reduce(reducer, 0)

console.log(`En total todos tienen ${totalLibros} libros`)


