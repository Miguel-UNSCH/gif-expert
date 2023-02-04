
export const getGifs = async (categoria) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(categoria) }&limit=5&api_key=fz5YiAG6U8gn9JMmvZVAR28xm75Df59v`
    
    const resp = await fetch(url)
    const { data } = await resp.json()

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.original.url
        }
    })

    return gifs;
}