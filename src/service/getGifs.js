const apiURL = 'https://api.giphy.com/v1/gifs/search?api_key=xFcdXd43xKNG5f7GoLvvzmFHrttOlYL1&q=pand&limit=25&offset=0&rating=g&lang=en'

export default function getGifs () {
    return fetch(apiURL) 
    .then(res => res.json()) 
    .then(response => {
      const {data} = response
      if (Array.isArray(data)){
        const gifs = data.map(image => image.images.downsized_medium.url)
        return gifs
      }
      
  })
}