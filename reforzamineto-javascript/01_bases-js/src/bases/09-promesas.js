
import {getHeroById} from './bases/08-exportar-funciones'



new Promise((resolve, reject) => {
    console.log('cuerpo promesa')
    //resolve('Promesa resuelta')
    reject(new Error('error'))
})
.then( mssg => console.log(mssg))
.catch(err => console.error(err.message))



const getHeroByIdAsync = (id) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const hero = getHeroById(id)
            if(hero){
                resolve(hero)
            }
            else{
               reject(new Error('No encontrado')) 
            }

        }, 1500)

    })
}

getHeroByIdAsync(20)
    .then(res => console.log(res))
    .catch(err => console.log(err))