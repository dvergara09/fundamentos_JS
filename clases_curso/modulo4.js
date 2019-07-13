/**PROGRAMACION ORIENTADA A OBJETOS */
/**COMO FUNCIONAN LAS CLASES EN JS */
function heredaDe(prototipoHijo, prototipoPadre){
    var fn = function(){}
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo
}

function Persona(nombre, apellido, altura, sexo){
    this.nombre     = nombre
    this.apellido   = apellido
    this.altura     = altura
    this.sexo       = sexo
}

Persona.prototype.saludar = function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.genero = function(){
    console.log(`${this.nombre} es ${this.sexo === 'm' ? 'masculino' : 'femenino'}`)
}


Persona.prototype.soyAlto = function(){
    var altura = this.altura >= 1.8 ? 'alta' : 'baja'
    console.log(`${this.nombre} es una persona ${altura}`)
}

function Desarrollador(nombre, apellido){
    this.nombre     = nombre
    this.apellido   = apellido
}

heredaDe(Desarrollador,Persona)

Desarrollador.prototype.saludar = function(){
    console.log(`Hola soy ${this.nomrbe} ${this.apellido} y soy Desarrollador`)
}

//otra otra version
/* Persona.prototype.soyAlto = function(){
    return this.altura >= 1.8
} */

//otra version
/*
Persona.prototype.soyAlto = function(){
    console.log(`${this.nombre} es una persona ${this.altura >=  1.8 ? 'alta' : 'baja'}`)
}
*/

//version que pienso mas completa y mucho mas rara no la recomiendo
/*
Persona.prototype.soyAlto = function(){
    var cadena =  this.altura >= 1.8 ? this.sexo === 'm' ? 'alto' : 'alta' : this.sexo === 'm' ? 'bajo' : 'baja' //prefiero un si anidado
    console.log(`${this.nombre} es ${cadena}`) 
} 
*/

/* var daniel      = new Persona('Daniel', 'Vergara',1.8,'m')
var mileidys    = new Persona ('Mileidys', 'Aldana',1.7,'f')
var jose        = new Persona('Jose', 'Salcedo',1.9,'m') */

/* daniel.saludar()
mileidys.saludar()
jose.saludar()
daniel.soyAlto()
daniel.genero()
mileidys.soyAlto()
 */
