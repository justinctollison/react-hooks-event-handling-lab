// Code Keypad Component Here
import react from "react"

function Keypad () {

    function beepBoop(){
        console.log("Entering password...")
    }

    return (
        <div>
            <input type="password" onChange={beepBoop}></input>
        </div>
    )
}

export default Keypad;