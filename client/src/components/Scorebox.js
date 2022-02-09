import React, { useEffect, useState } from 'react';
import './Scorebox.css'

function Scorebox() {
    const [display, setDisplay] = useState()
    const [click, setClick] = useState(false)
    
    const [scoreBoxData, setScoreBoxData] = useState([])

    // useEffect(() => {
    //     fetch("http://localhost:3000/user_scores")
    //     .then(response=>response.json())
    //     .then(data=>
    //         console.log(data)
    //         // setScoreBoxData(data)
    //         )
    // },[])
    
    const handleClick = () => {

    }

    return (
        <div className="scoreContainer">
            
           
            <button
                onClick={handleClick}  
            >X
            </button> 
        </div>
    )
}

export default Scorebox;