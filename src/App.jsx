import PlayerInfo from "./Components/PlayerInfo.jsx"
import GameBoard from "./Components/GameBoard.jsx"
import { useState } from "react"
function App() {
  const [activePlayer , setActivePlayer] = useState('X');
  function handleSelectSquare(){
    setActivePlayer((currentPlayer)=>currentPlayer==='X'?'O':'X');
  }
  return <main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <PlayerInfo name="PLAYER 1" symbol="X" isActive={activePlayer === 'X'}></PlayerInfo>
        <PlayerInfo name="PLAYER 2" symbol="O" isActive={activePlayer === 'O'}></PlayerInfo>
      </ol>

        GAME BOARD
      <GameBoard onSelectSquare={handleSelectSquare} getSymbol={activePlayer } />
    </div>
    LOG
  </main>
}

export default App
