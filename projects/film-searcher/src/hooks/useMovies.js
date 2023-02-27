import { useRef, useState } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies({ search }) {
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const previousSearch = useRef(search)

    const getMovies = async() => {
        if (previousSearch.current === search) return

        try {
            setLoading(true)
            setError(null)
            previousSearch.current = search
            const newMovies = await searchMovies({ search })
            setMovies(newMovies)
        } catch (e) {
            setError(e.message)
        } finally {
            // finally is what is done for both try and catch after their code finish
            setLoading(false)
        }
    }

    return { movies, getMovies, loading }
}