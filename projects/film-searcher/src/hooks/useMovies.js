import { useState } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies({ search }) {
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const getMovies = async() => {
        try {
            setLoading(true)
            setError(null)
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