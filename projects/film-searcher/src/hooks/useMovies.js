import wResults from '../mocks/w_results.json'
import woResults from '../mocks/wo_results.json'

export function useMovies() {
    const movies = wResults.Search

    // To avoid problems due to possible changes in the third-party API
    // we will create our own interface (so this will be the only element
    // we would have to change if the API results change)
    const mappedMovies = movies.map(movie => ({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster
    }))

    return { movies: mappedMovies }
}