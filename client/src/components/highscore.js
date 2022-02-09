import React from 'react';

function highscore() {

    return (
        <div>
            <p>High Scores:</p>
            {scoreBoxData.map((eachScore)=>{
                return(
                    <div>
                        <p>{eachScore.username}: {eachScore.points}</p>
                    </div>
                )
    
    })}
    </div>
    )
}

export default highscore 


    
    
