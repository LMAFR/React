import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import confetti from "canvas-confetti"

const TURNS = {
  X: 'x',
  O: 'o'
}

const Square = ({children, isSelected, updateBoard, index}) => {
  
  const className = `square ${isSelected ? 'is-selected' : ''}`
  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

const WINNER_COMBOS = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6] 
]

const checkWinner = (boardToCheck) => {
  for (const combo of WINNER_COMBOS) {
    const [a,b,c] = combo;

    if (
      boardToCheck[a] &&
      boardToCheck[b] === boardToCheck[a] &&
      boardToCheck[c] === boardToCheck[a]
    ) {
      return boardToCheck[a]
    }
  }
  // If there is no winner after check, continue playing
  return null
}

const checkEndGame = (newBoard) => {
  // Check if there is a draw
  return newBoard.every((square) => square !== null)
}

function App() {
  
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  // Let's say null equals no winner.
  const [winner, setWinner] = useState(null)

  const updateBoard = (index) =>{
    // don't update if cell is already filled or there is a winner
    if (board[index] || winner) return
    
    // update board
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // change turn
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X 
    setTurn(newTurn)

    // Check if there is a winner
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
      // As components in react update their states asynchronously...
      // alert(`El ganador es ${newWinner}`);
    } else if (checkEndGame(newBoard)){
      setWinner(false); // Equivalent to draw.
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  return (
  <main className='board'>
    <h1>Tic Tac Toe</h1>
    <section className="game">
      {
        board.map((_, index) => {
          return (
          <Square 
          key={index}
          index={index}
          updateBoard={updateBoard}
          >
            {board[index]}
          </Square>
          )
        })
      }
    </section>
    <section className="turn">
      <Square isSelected={turn === TURNS.X}>
        {TURNS.X}
      </Square>
      <Square isSelected={turn === TURNS.O}>
        {TURNS.O}
      </Square>
    </section>

    <section>
      {
        winner !== null && (
          <section className="winner">
            <div className="text">
              <h2>
                {
                  winner === false
                    ? 'Empate'
                    : 'Ganó: '
                }
              </h2>
              <header className="win">
                {winner && <Square>{winner}</Square>}
              </header>
              <footer>
                <button onClick={resetGame}>Empezar de nuevo</button>
              </footer>
            </div>
          </section>
        )
      }
    </section>
  </main>
  )
}

export default App
