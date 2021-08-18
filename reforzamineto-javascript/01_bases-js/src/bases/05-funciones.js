/* function saludoUsuario({name = "", age = 25,  logeed = false}){
    const greets = ``
    console.log()
}
 */

const heroes = [
    {
        id: 1,
        name: 'Batman'
    },
    {
        id: 2,
        name: 'Superman'
    }
]

const heroExist = (heroes) => {
    for(key in heroes){
        if(heroes[key] === 1){
            return heroes[key]
        }
    }
}

console.log(heroExist(heroes))