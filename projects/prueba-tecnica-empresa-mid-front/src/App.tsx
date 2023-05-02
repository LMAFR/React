import { useEffect, useState } from 'react'
import './App.css'
import { type User } from './types'

function App() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=100')
      .then(res => res.json())
      .then(res => {
        setUsers(res.results)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  return (
    <div className="App">
      <h1>Prueba técnica</h1>
      {
        JSON.stringify(users)
      }
    </div>
  )
}

export default App
