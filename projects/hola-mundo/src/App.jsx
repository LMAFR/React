import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

function App() {

  const format = (userName) =>{
    return `@${userName}`
  } 

  return (
    <section className='App'>
      <TwitterFollowCard formatUserName={format} isFollowing userName='rata' name='El profe de las tortugas ninja'></TwitterFollowCard>
      <TwitterFollowCard formatUserName={format} isFollowing={false} userName='rata' name='El profe de las tortugas ninja'></TwitterFollowCard>
      <TwitterFollowCard formatUserName={format} isFollowing userName='rata' name='El profe de las tortugas ninja'></TwitterFollowCard>
    </section>

  )
}

export default App
