const API_KEY = 'wXe5KWc2wY2HYiJ7O8yTOx26wJahwMAw'
const END_POINT = 'https://api.giphy.com/v1/gifs/random?api_key='

fetch(END_POINT+API_KEY)
    .then(res => res.json())
    .then(({data}) => {
        //console.log(data)
        const {url} = data.images.original

        const img = document.createElement('img')
        img.src = url
        document.body.append(img)
        //console.log(url)
    })
