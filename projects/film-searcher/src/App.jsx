import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function App () {
  const { movies } = useMovies()
  return (
    <div className='page'>
      <header>
        <h1>Buscador de Películas</h1>
        <form className='form' action=''>
          <input type='text' placeholder='Avengers, Star Wars, The Matrix, ...' />
          <button type='submit'>Search</button>
        </form>
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
