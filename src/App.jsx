import { useEffect, useState } from 'react'
import './App.css'
import Tile from './components/Tile';

function App() {

  const NUMBER_OF_TILES = 9;

  const [turn, setTurn] = useState('o');
  const [winner, setWinner] = useState(null);
  const [board, setBoard] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]);
  
  const resetStates = () => {
    setTurn('o');
    setWinner(null);
    setBoard([
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ]);
  }

  const checkDraw = () => {
    const filtered = board.flat().filter(tile => tile);
    if (filtered.length === NUMBER_OF_TILES) return true;
    return false;
  }

  const checkWin = (board, player) => {
    // Check rows
    for (let i = 0; i < 3; i++) {
      if (board[i][0] === player && board[i][1] === player && board[i][2] === player) {
        return true;
      }
    }
  
    // Check columns
    for (let j = 0; j < 3; j++) {
      if (board[0][j] === player && board[1][j] === player && board[2][j] === player) {
        return true;
      }
    }
  
    // Check diagonals
    if ((board[0][0] === player && board[1][1] === player && board[2][2] === player) ||
        (board[0][2] === player && board[1][1] === player && board[2][0] === player)) {
      return true;
    }
  
    return false;
  }


  useEffect(() => {
    if (checkWin(board, 'o')) {
      setWinner('O Won');
    } else if (checkWin(board, 'x')) {
      setWinner('X Won!');
    } else if (checkDraw()) {
      setWinner('Draw!');
    }

  }, [board]);
  
  return (
    <>
      <h1>{winner || `${turn.toUpperCase()} Turn`}</h1>
      <main>
        {board.flat().map((tile, i) => (
          <Tile key={i} setBoard={setBoard} winner={winner} turn={turn} setTurn={setTurn} tile={tile} i={i} />
        ))}
      </main>
      {winner && <button onClick={resetStates}>Play Again</button>}
    </>
  )
}

export default App
