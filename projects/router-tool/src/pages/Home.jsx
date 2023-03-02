import { Link } from '../Link'

export function HomePage () {
  return (
    <>
      <h1>Home Page</h1>
      <p>This is the home page of this router tool application.</p>
      <Link to='/about'>Ir a About Us</Link>
    </>
  )
}
