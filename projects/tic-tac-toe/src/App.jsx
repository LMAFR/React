import { useState } from 'react'
import './App.css'
import confetti from "canvas-confetti"
import { Square } from './components/square'
import { TURNS } from "./constant.js"
import { checkWinner, checkEndGame } from './logic/board'
import { WinnerModal } from './components/WinnerModal'

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
    <button onClick={resetGame}>Reiniciar el juego</button>
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
    
      <WinnerModal winner={winner} resetGame={resetGame}/>

  </main>
  )
}

export default App
