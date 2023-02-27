const API_KEY = 'f189ac93'

export const searchMovies = async({ search }) => {
    if (search === '') return null

    try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
        const json = await response.json()
        const movies = json.Search

        // To avoid problems due to possible changes in the third-party API
        // we will create our own interface (so this will be the only element
        // we would have to change if the API results change)
        return movies ?
            movies.map(movie => ({
                id: movie.imdbID,
                title: movie.Title,
                year: movie.Year,
                poster: movie.Poster
            })) :
            []
    } catch (e) {
        throw new Error('Error searching movies')
    }
}