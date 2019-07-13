/**PROGRAMACION ORIENTADA A OBJETOS */
/**COMO FUNCIONAN LAS CLASES EN JS */
class Persona{
    constructor(nombre, apellido, altura){
        this.nombre     = nombre
        this.apellido   = apellido
        this.altura     = altura
    }

    saludar(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
    }

    soyAlto(){
        var altura = this.altura >= 1.8 ? 'alta' : 'baja'
        console.log(`${this.nombre} es una persona ${altura}`)
    }
}

class Desarrollador extends Persona{
    constructor(nombre, apellido, altura){
        super(nombre, apellido, altura)
    }

    saludar(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy Desarrollador`)
    }

}