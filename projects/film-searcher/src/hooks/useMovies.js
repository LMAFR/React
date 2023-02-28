import { useRef, useState, useMemo, useCallback } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies({ search, sort }) {
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const previousSearch = useRef(search)

    const getMovies = useCallback(async({ search }) => {
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
    }, [])

    const sortedMovies = useMemo(() => {
        console.log('memoSortedMovies')
        return sort
            //   localeCompare help us in alphabetic sorting because using it a and
            //  á are near in the list (not a-z and then á, â, ä, etc)
            ?
            [...movies].sort((a, b) => a.title.localeCompare(b.title)) :
            movies
    }, [sort, movies])

    return { movies: sortedMovies, getMovies, loading }
}