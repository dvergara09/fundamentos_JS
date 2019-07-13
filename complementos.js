/**TRABAJANDO CON FECHAS */
function diasEntreFechas(fecha1, fecha2){
    
    const unDia = 1000 * 60 * 60 * 24

    const diferencia = Math.abs(fecha1-fecha2)
    
    return Math.floor(diferencia/unDia)
}

const hoy = new Date()
const nacimiento = new Date(1996,8,1)

/** RECURSIVIDAD */
function divisionEntera(dividendo, divisor){
    if(dividendo < divisor){
        return 0
    }

    return 1 + divisionEntera(dividendo-divisor, divisor)
}

/**MEMOIZACION */
function factorial(numero){
    if(!this.cache){
        this.cache ={}
    }

    if(this.cache[numero]){
        return this.cache[numero]
    }

    if(numero === 1){
        return 1
    }

    this.cache[numero] = numero* factorial(numero-1)
    return this.cache[numero]
}

/**ESTRUCTURA DE DATOS INMUTABLES */
/* const daniel = {
    nombre: 'daniel',
    apellido: 'vergara',
    edad: 22
} */
//const cumpleaños = persona => persona.edad++

/* const cumpleañosInmutable = persona => ({
    ...persona,
    edad: persona.edad + 1
}) */

/**CAMBIANDO EL CONTEXTO */
const daniel = {
    nombre: 'daniel',
    apellido: 'vergara'
}

function saludar(){
    console.log(`Hola my nombre es ${this.nombre}`)
}

const saludarADaniel = saludar.bind(daniel)


setTimeout(saludar.bind(daniel),1000)
