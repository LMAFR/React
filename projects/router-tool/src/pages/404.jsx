import { Link } from '../Link'

export default function Page404 () {
  return (
    <>
      <h1>This is not fine</h1>
      <img src='https://midu.dev/images/this-is-fine-404.gif' alt='Gif del perro de This is fine quemándose vivo.' />
      <br />
      <Link to='/'>Go to home Page</Link>
    </>
  )
}
