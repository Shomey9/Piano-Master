import React, { useEffect, useState } from 'react';
import './Highscore.css'

function Highscore() {
    const [scoreBoxData, setScoreBoxData] = useState([])
    
    useEffect(() => {
        fetch("/user_scores")
        .then(response=>response.json())
        .then(data=>
                setScoreBoxData(data)
            )
    },[])

    return (
        <div>
            <p className="highScore">High Scores:</p>
            {scoreBoxData.map((eachScore)=>{
                return(
                    <div className="highScoresContainers">
                        <p 
                            className="highscoreText"
                            style={{fontSize: 10}}
                        >{eachScore.username}: {eachScore.points}</p>
                    </div>
                )
    
            })}
        </div>
    )
}

export default Highscore 


    
    
