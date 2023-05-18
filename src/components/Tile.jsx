

export default function Tile({ setBoard, tile, i, turn, setTurn }) {
  const handleClick = () => {
    setBoard(prevState => {
      const temp = structuredClone(prevState).flat();
      temp[i] = turn === 'o' ? 'o' : 'x';
      return [
        [temp[0], temp[1], temp[2]], 
        [temp[3], temp[4], temp[5]], 
        [temp[6], temp[7], temp[8]], 
      ];
    });
    
    setTurn(prevState => prevState === 'o' ? 'x' : 'o');
  }

  return (
    <div 
      onClick={handleClick}
      className="border"
    >{tile}</div>
  )
}
