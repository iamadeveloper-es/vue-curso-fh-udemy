import axios from 'axios'

const API_KEY = 'wXe5KWc2wY2HYiJ7O8yTOx26wJahwMAw'
const END_POINT = 'https://api.giphy.com/v1/gifs/'

const giphyApi = axios.create({
    baseURL: END_POINT,
    params: {
        api_key: API_KEY
    }
})

export default giphyApi

/* giphyApi.get('/random')
    .then((res) => {

        const {data} = res.data
        const {url} = data.images.original

        console.log(data)
        console.log(url)

        const img = document.createElement('img')
        img.src = url
        document.body.append(img)
    }) */

