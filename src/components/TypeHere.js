import React from 'react'

function TypeHere ({findText}) {
    
    return (
        <div>
            <label>Type Here! </label>
            <input type="text" onChange={findText}></input>
        </div>
    )    
}

export default TypeHere;