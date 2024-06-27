import { useState } from "react"

const arr = [
    [null , null , null],
    [null , null , null],
    [null , null , null],
]
export default function GameBoard({onSelectSquare , getSymbol}){
    const [boxUpdate , setBoxUpdate] = useState(arr);
    function handleSelectedSquare(rowIndex , colIndex ){
        setBoxUpdate((prevGameBoard)=>{
            const updatedUser = [...prevGameBoard.map(innerArray=>[...innerArray])]
            updatedUser[rowIndex][colIndex] = getSymbol;
            return updatedUser;
        })
        onSelectSquare();
    }

    return <ol id="game-board">
        {boxUpdate.map((row , rowIndex)=><li key={rowIndex}>
            <ol>
                {row.map((playerSymbol , colIndex)=>
                    <li key={colIndex}>
                        <button onClick={()=>handleSelectedSquare(rowIndex , colIndex)}>{playerSymbol}</button>
                    </li>
                )}
            </ol>
        </li>
        
        )}
    </ol>
}