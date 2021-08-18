import heroes from '../data/heroes'

console.log(heroes)

export const getHeroById = (id) => heroes.find((hero) => hero.id === id)

const getHeroName = () => (heroId) => heroId.name 

console.log(getHeroById(1))
console.log(getHeroById(5))

console.log(getHeroName()(getHeroById(4)))

const getHerosByOwner = (owner) => {
    return heroes.filter((item) => {
        return item.owner.toLowerCase() === owner.toLowerCase()
    })
}

console.log(getHerosByOwner('MarVEL'))