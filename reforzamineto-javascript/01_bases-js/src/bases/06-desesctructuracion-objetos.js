const person = {
    name: 'Tony',
    age: 25,
    codeName: 'IronMan',
    power: 'flying'
}

const person2 = {
    name: 'Bryan',
    age: 32,
    codeName: 'Hulk',
    power: 'force'
}


const {age, codeName, name, power = 'No tiene poder'} = person2

console.log({age, codeName, name, power})



const createHero = ({age:edad, codeName, name, power}) =>  ({id: 154545454, edad, codeName, name, power})

console.log(createHero(person2))
console.log(createHero(person))