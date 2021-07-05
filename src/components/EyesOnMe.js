// Code EyesOnMe Component Here
import react from "react"

function EyesOnMe () {

    function OnBall(){
        console.log("Good!")
    }

    function OffBall(){
        console.log("Hey! Eyes on me!")
    }

    return (
        <div>
            <button onFocus={OnBall} onBlur={OffBall}>Eyes on me</button>
        </div>
    )
}

export default EyesOnMe;