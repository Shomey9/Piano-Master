import React, { useState } from 'react';
import './Key.css'

function Key(props) {

    const [keyColor, setColor] = useState(0)
    const [pressedKey, setPressedKey] = useState("")
    // console.log(pressedKey)
    // const whatDidIPress = () => {
    //     return props.note
    // }
    // console.log(whatDidIPress())

    const handleClick = () => {
        setPressedKey(props.note.toUpperCase())
        setColor(1);
        setTimeout(()=>
            {
                setColor(0)
            }, 100
        );
    }
    
    props.keyData(pressedKey)
    
    return (
        <div>
            {
                props.note.length > 1 
                    ?
                (
                    <div 
                        className="flat"
                        onClick={handleClick}
                        style={{
                            backgroundColor: keyColor === 1 ? "#00d8ff" : "black"
                        }}
                    /> 
                )
                    :
                (
                    <div 
                        className="key"
                        onClick={handleClick}
                        style={{
                            backgroundColor: keyColor === 1 ? "#00d8ff" : "white"
                        }}
                    >
                        <div className="key-text">
                            {props.note.toUpperCase()}
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default Key;