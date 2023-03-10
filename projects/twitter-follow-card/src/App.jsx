import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

function App() {

  const format = (userName) =>{
    return `@${userName}`
  };

  const users = [
    {
      userName: 'midudev',
      name:'Martín',
      isFollowing: false
    },
    {
      userName: 'pheralb',
      name: 'Pablo H.',
      isFollowing:true
    }
  ]

  return (
    <section className='App'>
      {/* <TwitterFollowCard formatUserName={format} userName='rata' name='El profe de las tortugas ninja'></TwitterFollowCard>
      <TwitterFollowCard formatUserName={format} userName='rata' name='El profe de las tortugas ninja'></TwitterFollowCard>
      <TwitterFollowCard formatUserName={format} userName='rata' name='El profe de las tortugas ninja'></TwitterFollowCard> */}

      {
      users.map(user => {
        const {userName, name, isFollowing} = user;
        return (
          <TwitterFollowCard key={userName} formatUserName={format} userName={userName} initialIsFollowing={isFollowing}>{name}</TwitterFollowCard>
        )
        
      })
      }
    </section>

  )
}

export default App
