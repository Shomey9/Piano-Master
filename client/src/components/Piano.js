import React, { useState } from 'react';

import './Piano.css'
import Key from './Key';
import {NOTES} from '../global/constants.js';

function Piano(props) {
    // const [pressedKeys, setPressedKeys] = useState([]);
    const [passInfo, setPassInfo] = useState("")
    const dataFromKey = (keyData) => {
        // console.log("Data from Keys: ", keyData)
        setPassInfo(keyData) 
    }

    props.pianoData(passInfo)
    
    return (
        <div className="piano">
            {NOTES.map((note, index)=> {
                return(
                    <Key 
                        note={note}
                        key={index}
                        keyData={dataFromKey}
                        // pressedKeys={pressedKeys}
                    />
                )
            })}
        </div>
    );
}

export default Piano;