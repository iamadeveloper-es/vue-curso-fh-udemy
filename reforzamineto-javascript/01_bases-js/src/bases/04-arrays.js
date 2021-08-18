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

const heroExistSome = heroes.some((item) => item.id === 2)
const heroExistFind = heroes.find((item) => item.id === 1)


console.log(heroExistSome)
console.log(heroExistFind)




