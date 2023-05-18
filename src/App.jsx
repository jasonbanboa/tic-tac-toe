import { useEffect, useState } from 'react'
import './App.css'
import Tile from './components/Tile';

function App() {

  const [turn, setTurn] = useState('o');
  const [winner, setWinnter] = useState(null);
  const [board, setBoard] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]);

  useEffect(() => {
    if (checkWin(board, 'o')) {
      setWinnter('o 우승');
    } else if (checkWin(board, 'x')) {
      setWinnter('x 우승');
    }
  }, [board]);

  function checkWin(board, player) {
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

  return (
    <>
      <h1>{winner}</h1>
      <main>
        {board.flat().map((tile, i) => (
          <Tile key={i} setBoard={setBoard} turn={turn} setTurn={setTurn} tile={tile} i={i} />
        ))}
      </main>
    </>
  )
}

export default App
