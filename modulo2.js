/**ESTRUCTURAS DE CONTROL: CONDICIONALES */
/* var daniel = {
    nombre: 'Daniel',
    apellido: 'Vergara',
    edad: 28,
    ingeniero: true,
    cocinero: true,
    cantante: false,
    dj: false,
    guitarrista: false
} */

/* var mileidys = {
    nombre: 'Mileidys',
    apellido: 'Padilla',
    edad: 17,
    ingeniero: true,
    cocinero: true,
    cantante: false,
    dj: false,
    guitarrista: false
} */
/* function imprimirProfesiones(persona){
    
    console.log(`${persona.nombre} es: `)
    if(persona.ingeniero){
        console.log('Ingeniero')
    }else{
        console.log('No es ingeniero')
    }
    if(persona.cocinero){
        console.log('Cocinero')
    }else{
        console.log('No es cocinero')
    }
    if(persona.cantante){
        console.log('cantante')
    }else{
        console.log('No es cantante')
    }
    if(persona.dj){
        console.log('Dj')
    }else{
        console.log('No es dj')
    }
    if(persona.guitarrista){
        console.log('Guitarrista')
    }else{
        console.log('No es guitarrista')
    }
        
} */

//imprimirProfesiones(daniel)

/**RETO */

/*function mayoriaEdad(persona){
    console.log(`${persona.nombre} es: `)
    if(persona.edad >= 18){
        console.log('Mayor de edad')
    }else{
        console.log('Menor de edad')
    }
}*/

/*function mayoriaEdad2(persona){
    mayor = persona.edad >= 18 ? true : false
    
    esmayor = mayor ? ' es mayor de edad' : 'es menor de edad'
    
    console.log(persona.nombre + esmayor)
}*/

//mayoriaEdad(daniel)

//mayoriaEdad2(daniel)

// const EDADMAYOR = 18
/*function esMayor(persona){
    return persona.edad >= EDADMAYOR
} */

/*function mayoriaEdad3(persona){
    if(esMayor(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    }else{
        console.log(`${persona.nombre} es menor de edad`)
    }
}*/

//mayoriaEdad3(daniel)

/*function imprimirMayoriaEdad(persona){
    mayoria = persona.edad >= EDADMAYOR ? true : false
    cadena = mayoria ? ' es mayor de edad' : ' es menor de edad'
    console.log(persona.nombre + cadena)
}*/

//imprimirMayoriaEdad(mileidys)


/**ARROW FUNCTIONS */
// const esMayordeEdad = ({ edad }) => edad >= EDADMAYOR
// const EDADMAYOR = 18
// const permitir_acceso= (persona) => esMayordeEdad(persona) ? ' Entra' : ' No entra'
//const esMenordeEdad = ({ edad}) => !esMayordeEdad({ edad })


/**CICLOS */
/* var daniel={
    nombre: 'Daniel',
    apellido: 'Vergara',
    edad: 22,
    peso: 75
} */

/* console.log(`Al principio del año ${daniel.nombre} pesa ${daniel.peso}kg`)

const INCREMENTO_PESO   = 0.3
const DIAS              = 365
const META              = daniel.peso - 3


const aumentarDePeso    = (persona) => persona.peso += INCREMENTO_PESO
const adelgazar         = (persona) => persona.peso -= INCREMENTO_PESO
const comeMucho         = () => Math.random() < 0.3
const realizaDeporte    = () => Math.random() < 0.4 */



// var dias = 0

/* while(daniel.peso > META){
    
    if(comeMucho()){
        aumentarDePeso(daniel)
    }
    if(realizaDeporte()){
        adelgazar(daniel)
    }
    dias ++
} */


/* for(var i = 1; i <= DIAS; i++){
    var random = Math.random()
    if(random < 0.25){
        aumentarDePeso(daniel)
        
    }else if(random < 0.5){
        adelgazar(daniel)
    }
} */
// console.log(`Al final del año ${daniel.nombre} pesa ${daniel.peso.toFixed(2)}kg`)
// console.log(`Pasaron ${dias} dias hasta que  ${daniel.nombre} adelgara 3kg`)

/* var contador = 0
const llueve = () => Math.random() < 0.25

do{
}while(!llueve()) */
    //contador++

//version larga
/* if(contador === 1){
    console.log(`Fui a ver si llovia ${contador} vez`)
}else{
    console.log(`Fui a ver si llovia ${contador} veces`)
} */

//version corta1
/* var cantidad = contador===1 ? 'Vez' : 'Veces'
console.log(`Fui a ver si llovia ${contador} ${cantidad}`) */



const caballeros = {
    aries: 'Mu',
    tauro: 'Aldebaran',
    geminis: 'Saga',
    cancer: 'Mascara de muerte',
    leo: 'Aioria',
    virgo: 'Shaka',
    libra: 'Dokho',
    escorpion: 'Milo',
    sagitario: 'Aioros',
    capricornio: 'Shura',
    acuario: 'Camus',
    piscis: 'Afrodita'
}

const calcularSigno = function(signo){
    switch (signo.toLowerCase()){
        case 'aires':
            console.log(caballeros.aries)
            break;
        case 'tauro':
            console.log(caballeros.tauro)
            break;
        case 'geminis':
            console.log(caballeros.geminis)
            break;
        case 'cancer':
            console.log(caballeros.cancer)
            break;
        case 'leo':
            console.log(caballeros.leo)
            break;
        case 'virgo':
            console.log(caballeros.virgo)
            break;
        case 'libra':
            console.log(caballeros.libra)
            break;
        case 'escorpion':
            console.log(caballeros.escorpion)
            break;
        case 'sagitario':
            console.log(caballeros.sagitario)
            break;
        case 'capricornio':
            console.log(caballeros.capricornio)
            break;
        case 'acuario':
            console.log(caballeros.acuario)
            break;
        case 'piscis':
            console.log(caballeros.piscis)
            break;
        default:
            console.log('error')
            break;
    }
    
}


const preguntar = () => signo = prompt('Cual es tu signo? Escribe salir para salir')

preguntar()


while(signo.toLowerCase() !== 'salir'){
    calcularSigno(signo)
    preguntar()
}