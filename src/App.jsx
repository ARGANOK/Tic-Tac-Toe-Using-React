import PlayerInfo from "./Components/PlayerInfo.jsx"
import GameBoard from "./Components/GameBoard.jsx"
import { useState } from "react"
import Log from "./Components/Log.jsx"
import { WINNING_COMBINATIONS } from "./winning-combinations.js"
import GameOver from "./Components/GameOver.jsx"
function derivedPlayer(gameTurns){
    let currentPlayer = 'X';
    if(gameTurns.length > 0 && gameTurns[0].player === 'X'){
      currentPlayer = 'O';
    }
    return currentPlayer;
}
const intialGameBoard = [
  [null , null , null],
  [null , null , null],
  [null , null , null],
]
function App() {
  // const [activePlayer , setActivePlayer] = useState('X');
  const [gameTurns , setGameTurns] = useState([])
  const activePlayer = derivedPlayer(gameTurns)
  let gameBoard = [...intialGameBoard.map(array=>[...array])];
  for(const turn of gameTurns){
      const{square , player} = turn;
      const{row  , col} = square;
      gameBoard[row][col] = player;
  }
  let winner;
  for(const combination of WINNING_COMBINATIONS){
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];
    if(firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol){
      winner = firstSquareSymbol;
    }
  }
  const hasDraw = gameTurns.length === 9 && !winner;
  function handleSelectSquare(rowIndex , colIndex){
    // setActivePlayer((currentPlayer)=>currentPlayer==='X'?'O':'X');
    setGameTurns(
      prevTurns =>{
        const currentPlayer = derivedPlayer(prevTurns);
        // let currentPlayer = 'X';
        // if(prevTurns.length > 0 && prevTurns[0].player === 'X'){
        //   currentPlayer = 'O';
        // }
        const updatedTurns = [
          {square:{row:rowIndex , col:colIndex} , player : currentPlayer} , 
          ...prevTurns];
        return updatedTurns;
    });
  }
  function handleRestart(){
    setGameTurns([]);
  }
  return <main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <PlayerInfo name="PLAYER 1" symbol="X" isActive={activePlayer === 'X'}></PlayerInfo>
        <PlayerInfo name="PLAYER 2" symbol="O" isActive={activePlayer === 'O'}></PlayerInfo>
      </ol>
      {(winner || hasDraw)&&<GameOver playerSymbol={winner}  onRestart={handleRestart}/>}
      <GameBoard onSelectSquare={handleSelectSquare} board = {gameBoard}  />
    </div>
    <Log turns={gameTurns}/>
  </main>
}

export default App
