

export default function Tile({ winner, setBoard, tile, i, turn, setTurn }) {
  const handleClick = () => {
    setBoard(prevState => {
      const temp = structuredClone(prevState).flat();
      
      if (temp[i] || winner) {
        return [...prevState];
      }

      temp[i] = turn === 'o' ? 'o' : 'x';
      
      setTurn(prevState => prevState === 'o' ? 'x' : 'o');
      
      return [
        [temp[0], temp[1], temp[2]], 
        [temp[3], temp[4], temp[5]], 
        [temp[6], temp[7], temp[8]], 
      ];
    });
    
  }

  return (
    <div 
      onClick={handleClick}
      className="border"
    >{tile}</div>
  )
}
