const miPromesa = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //resolve('resolve en miPromesa')
            reject('ERROR en miPromesa')
        }, 1000)
    })
}

const miPromesaAsync = async () => {
    try {
        console.log('Inicio')

        const response = await miPromesa()
        console.log(response)

        console.log('Fin')

        return 'fin promesa Async'
    } catch (error) {
        /*
        el return en una función asincrona está retornando el valor esperado,
        por lo que entrará dentro del then() y no en el catch().

        Para que entre en el catch debemos usar throw
        */
        //return 'catch en miPromesaAsync'
        throw 'Error en miPromesaAsync'
    }

}


miPromesaAsync()
    .then(res => console.log(res))
    .catch(err => console.log(err))