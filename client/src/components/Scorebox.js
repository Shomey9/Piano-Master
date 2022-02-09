import React, { useEffect, useState } from 'react';
import Highscore from './Highscore.js'
import Userscore from './Userscore.js'
import './Scorebox.css'

function Scorebox() {
    const [display, setDisplay] = useState(false)
    const [click, setClick] = useState(false)
    
    

    
    
    const handleClick = () => {
        // console.log("Click")
        setClick(!click)
        setDisplay(click)
        console.log(click)
    }

    // const display
    

    return (
        <div className="scoreContainer">
            <button
                    className="scoreButton"
                    onClick={handleClick}  
                >X
            </button>
            {
                display === false ?
                    (
                <Highscore />
                )
                    :
                    (
                <Userscore />
                )
            } 
    
                
        </div>
    )

}
export default Scorebox;