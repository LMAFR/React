import './App.css'
import { Router } from './Router'
import Page404 from './pages/404'
import { HomePage } from './pages/Home'
import { AboutPage } from './pages/About'
import SearchPage from './pages/Search'
import { Route } from './Route'

function App () {
  const appRoutes = [
    {
      path: '/search/:query',
      Component: SearchPage
    }
  ]

  return (
    <main>
      <Router
        routes={appRoutes}
        defaultComponent={Page404}
      >
        <Route path='/' Component={HomePage} />
        <Route path='/about' Component={AboutPage} />
      </Router>
    </main>
  )
}

export default App
