import React, { useState } from 'react';

import './Piano.css'
import Key from './Key';
import {NOTES} from '../global/constants.js';

function Piano(props) {
    // const [pressedKeys, setPressedKeys] = useState([]);
    const dataFromKey = (keyData) => {
        props.pianoData(keyData)
        // console.log("Data from Keys Component: ", keyData);
    }

    
    
    return (
        <div onClick={props.onClick} className="piano">
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