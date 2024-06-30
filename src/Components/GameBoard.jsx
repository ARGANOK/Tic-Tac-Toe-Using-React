

export default function GameBoard({onSelectSquare , board}){
    // const [boxUpdate , setBoxUpdate] = useState(arr);
    // function handleSelectedSquare(rowIndex , colIndex ){
    //     setBoxUpdate((prevGameBoard)=>{
    //         const updatedUser = [...prevGameBoard.map(innerArray=>[...innerArray])]
    //         updatedUser[rowIndex][colIndex] = getSymbol;
    //         return updatedUser;
    //     })
    //     onSelectSquare();
    // }
    // let GameBoard = arr;
    // for(const turn of turns){
    //     const{square , player} = turn;
    //     const{row  , col} = square;
    //     GameBoard[row][col] = player;
    // }
    return <ol id="game-board">
        {board.map((row , rowIndex)=><li key={rowIndex}>
            <ol>
                {row.map((playerSymbol , colIndex)=>
                    <li key={colIndex}>
                        <button onClick={()=>onSelectSquare(rowIndex , colIndex)} disabled={playerSymbol!==null} >{playerSymbol}</button>
                    </li>
                )}
            </ol>
        </li>
        
        )}
    </ol>
}