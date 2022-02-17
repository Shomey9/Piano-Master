import React, { useEffect, useState } from 'react';
import './Key.css'

function Key(props) {

    const [keyColor, setColor] = useState(0)
    // const [key, setKey] = useState("")
    // console.log("key: ", key)
    // const whatDidIPress = () => {
    //     return props.note
    // }
    // console.log(whatDidIPress())

    const handleClick = () => {
        setColor(1);
        props.keyData(props.note.toUpperCase())
        setTimeout(()=>
            {
                setColor(0)
            }, 100
        );
        
    }

    // useEffect(()=>{
    //     setSomething(props.note.toUpperCase())
    // }, [])
    
    
    
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