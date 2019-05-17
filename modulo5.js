/**ASINCRONISMO*/
/**FUNCIONES CON PARAMETROS */
/* class Persona{
    constructor(nombre, apellido, altura){
        this.nombre     = nombre
        this.apellido   = apellido
        this.altura     = altura
    }

    saludar(fn){
        var { nombre, apellido } = this
        
        console.log(`Hola, me llamo ${nombre} ${apellido}`)
        
        if(fn){
            fn(nombre,apellido)
        }
    }

    soyAlto(){
        var altura = this.altura >= 1.8 ? 'alta' : 'baja'
        console.log(`${this.nombre} es una persona ${altura}`)
    }
} */

/* class Desarrollador extends Persona{
    constructor(nombre, apellido, altura){
        super(nombre, apellido, altura)
    }

    saludar(fn){

        var { nombre, apellido } = this
        // var nombre      = this.nombre
        // var apellido    = this.apellido
        
        console.log(`Hola, me llamo ${nombre} ${apellido} y soy Desarrollador`)
        if(fn){
            fn(nombre,apellido,true)
        }
    }
}
 */
/* function responderSaludo(nombre, apellido, esDev){
    console.log(`Buen dia ${nombre} ${apellido}`)
    if(esDev){
        console.log(`no sabia que eres Dev`)
    }
} */

// var daniel      = new Persona('Daniel', 'Vergara',1.8)
// var mileidys    = new Persona ('Mileidys', 'Aldana',1.7)
// var jose        = new Desarrollador('Jose', 'Salcedo',1.9)

// daniel.saludar(responderSaludo)
// mileidys.saludar(responderSaludo)
// jose.saludar(responderSaludo)

/**COMO FUNCIONA EL TIEMPO EN JS */
// console.log('a')
// setTimeout(() => console.log('b'),0)
// console.log('c')

/* setTimeout(() => console.log('d'),2000)

for(var i = 0; i<10000000000;i++){
    
} */

/**CALLBACKS */

/* const API_URL       = 'https://swapi.co/api/'
const PEOPLE_URL    = 'people/:id'

const opts = { crossDomain: true}



function obtenerPersonaje(id, callback){
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
    
    $.
        get(url, opts, callback)
        .fail(() => {
        console.log(`Sucedio un error, no se pudo obtener personaje ${id}`)
    })
}


obtenerPersonaje(1,function(personaje){
    console.log(`Hola soy ${personaje.name}`)        

    obtenerPersonaje(2, function(personaje){
        console.log(`Hola soy ${personaje.name}`)
    
        obtenerPersonaje(3, function(personaje){
            console.log(`Hola soy ${personaje.name}`)            
        })
    })
}) */

/**PROMESAS */
const API_URL       = 'https://swapi.co/api/'
const PEOPLE_URL    = 'people/:id'

const opts = { crossDomain: true}



function obtenerPersonaje(id){

    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
        $
        .get(url, opts, function(data){
            resolve(data)

        })
        .fail(() => reject(id))
    })
}

function onError(id){
    console.log(`Error al obtener el personaje ${id}`)
}


/* obtenerPersonaje(1)
    .then((personaje) => {
        console.log(`El personaje es ${personaje.name}`)

        return obtenerPersonaje(2)

    })

    .then((personaje) => {
        console.log(`El personaje es ${personaje.name}`)

        return obtenerPersonaje(3)

    })

    .then((personaje) => {
        console.log(`El personaje es ${personaje.name}`)

        return obtenerPersonaje(4)

    })
    .catch(onError)
 */

 /**MULTIPLES PROMESAS EN PARALELO */


//  var ids = [1,2,3,4,5,6,7]
//  var promesas = ids.map(function(id){
//     return obtenerPersonaje(id)
//  })

/* var promesas = ids.map(id => obtenerPersonaje(id))

Promise
    .all(promesas)
    .then(personajes => console.table(personajes))
    .catch(onError) */

/**ASYNC-AWAIT */
async function obtenerPersonajes(){
    var ids = [1,2,3,4,5,6,7]
    var promesas = ids.map(id => obtenerPersonaje(id))
    try {
        var personajes = await Promise.all(promesas)
        console.table(personajes)        
    } catch (id) {
        onError(id)
    }

}

obtenerPersonajes()