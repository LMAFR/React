import { lazy, Suspense } from 'react'
import './App.css'
import { Router } from './Router'
import Page404 from './pages/404'
import SearchPage from './pages/Search'
import { Route } from './Route'
import { HomePage } from './pages/Home.jsx'
import { AboutPage } from './pages/About.jsx'

// Add dynamic import for pages in order to use lazy loading on them
// const LazyHomePage = lazy(() => import('./pages/Home.jsx'))
// const LazyAboutPage = lazy(() => import('./pages/About.jsx'))

const appRoutes = [
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

function App () {
  return (
    <main>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <Router
        routes={appRoutes}
        defaultComponent={Page404}
      >
        <Route path='/' Component={HomePage} />
        <Route path='/about' Component={AboutPage} />
      </Router>
      {/* </Suspense> */}
    </main>
  )
}

export default App
