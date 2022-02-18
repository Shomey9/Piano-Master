import React, { useEffect, useState } from 'react';

import A from '../notes/A.png';
import B from '../notes/B.png';
import C from '../notes/C.png';
import D from '../notes/D.png';
import E from '../notes/E.png';
import F from '../notes/F.png';
import G from '../notes/G.png';

import './MusicNotes.css'

function MusicNotes(props) {
    
    const [index, setIndex] = useState(0)
    // console.log("index: " , index)
    const [randomMath, setRandomMath] = useState(Math.random()*7)
    console.log("randomMath value: ", randomMath)
    const [toggle, setToggle] = useState(true)
    // console.log(toggle)
    const [studentAnswer, setStudentAnswer] = useState("")
    console.log("Student Answer: ", studentAnswer)
    const [currentSheetNote, setCurrentSheetNote] = useState("")
    console.log(" Current Sheet Note: ", currentSheetNote)

    const arrayOfNoteImages = [
        C, D, E, F, G, A, B
    ]
    const arrayOfNotes = [
        "C", "D", "E", "F", "G", "A", "B"
    ]

    useEffect(()=>{
        setIndex(Math.floor(randomMath))
        setStudentAnswer(props.userAnswer)
        setCurrentSheetNote(noteToSend)
        handleImageChange()
    })

    const handleImageChange = () => {
        setToggle(false)
        // setRandomMath(Math.random()*7)
        


        // if (studentAnswer===currentSheetNote) {
            // setStudentAnswer("")
            // setTimeout(()=>{
                
            //     setRandomMath(Math.random()*7)
            // },2000)
            
        // } else {
            // setStudentAnswer("")
        // }
    }
    
    // if (toggle === false) {
    //     setRandomMath(Math.random()*7)
    //     setToggle(true)
    // } 

    

    const generateNoteImage = [
        arrayOfNoteImages[index]
    ]
    // console.log(generateNoteImage)

    const generateNote = [
        arrayOfNotes[index]
    ]
    // console.log(generateNote)

    const noteToSend = generateNote[0]
    props.musicNotesData(noteToSend)
    // console.log(noteToSend)
    
    return (
        <div>
            {/* <button onClick={handleImageChange}>X</button> */}
            <p>
                What is this note?
            </p>

            {/* {
                if () {
                    return (
                        <p>Correct!</p>
                    )
                } else {
                    return (
                        <p>Incorrect!</p>
                    )
                }
            } */}

            <img 
                className="musicImage"
                src={
                    generateNoteImage[0]
                } 
                alt="musical note"
            />
        </div>
    )
}

export default MusicNotes; 