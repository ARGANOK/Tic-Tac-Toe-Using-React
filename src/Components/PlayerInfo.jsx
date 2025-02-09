import { useState } from "react"

export default function Info({name , symbol , isActive}){
    let theButtonWork = "Edit"
    const [isEditing , setEditing] = useState(false);
    const [playerName , setName] = useState(name);
    if(isEditing){
        console.log("Edit Button Clicked");
    }
    else console.log("Save Button Clicked");
    function handleEditClick(){
        setEditing((editing)=>!editing)
    }  
    function handleNameChange(event){
        setName(event.target.value)
    }
    let editableNameChange =  <span className="player-name">{playerName}</span>;
    if(isEditing){
        editableNameChange = <input type="text" value={playerName} onChange={handleNameChange} />
    }

    return (
    <li className={isActive?'active':undefined}>
        <span className="player">
            {editableNameChange}
            <span className="player-symbol">{symbol}</span>
        </span>
        {/* {!isEditing ?( */}
            <button onClick={handleEditClick}>{isEditing?(theButtonWork = "Save"):(theButtonWork = "Edit")}</button>
        {/* ):( */}
            {/* <button onClick={handleSaveClick}>SAVE</button> */}
        {/* )            */}
        {/* } */}
      </li>
    )
}