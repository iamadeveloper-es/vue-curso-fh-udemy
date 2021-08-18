
const persona = {
    nombre: 'Tony',
    edad: 18
}

//spread Operator 
//duplica un objeto
const persona2 = {...persona}

persona2.nombre = 'Adam'
persona2.edad = 1500

console.log(persona)
console.log(persona2)