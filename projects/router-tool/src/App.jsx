import './App.css'
import { Router } from './Router'
import Page404 from './pages/404'
import { HomePage } from './pages/Home'
import { AboutPage } from './pages/About'
import SearchPage from './pages/Search'

function App () {
  const appRoutes = [{
    path: '/',
    Component: HomePage
  },
  {
    path: '/about',
    Component: AboutPage
  },
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
      />
    </main>
  )
}

export default App
