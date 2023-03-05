import { useEffect, useState } from 'react'
import { EVENTS } from './const'
import { match } from 'path-to-regexp'

export function Router ({ routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1> }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  }, [])

  let routeParams = {}

  const Page = routes.find(({ path }) => {
    if (path === currentPath) return true

    // If path !== currentPath, then could by a dynamic URL
    // This type of routes can be detected by match function
    // in path-to-regexp library
    const matcherUrl = match(path, { decode: decodeURIComponent })
    const matched = matcherUrl(currentPath)
    // If it is not, return false to make Page === null
    if (!matched) return false
    // if previous condition does not meet, we got a dynamic URL
    // so here we store the URL params. Example: search/javascript
    // => matched.params.query === 'javascript
    routeParams = matched.params
    console.log(routeParams)
    // And return true to make Page = to the corresponding Component
    return true
  })?.Component

  return Page
    ? <Page routeParams={routeParams} />
    : <DefaultComponent routeParams={routeParams} />
}
