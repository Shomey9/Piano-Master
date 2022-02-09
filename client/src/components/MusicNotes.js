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
    // console.log(A)
    const [index, setIndex] = useState(0)
    // console.log("index: " , index)

    const arrayOfNoteImages = [
        C, D, E, F, G, A, B
    ]
    const arrayOfNotes = [
        "C", "D", "E", "F", "G", "A", "B"
    ]

    useEffect(() => {
        const randomIndex = Math.floor(Math.random()*7);
        setIndex(randomIndex);
    }, [])

    
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
                src={
                    generateNoteImage[0]
                } 
                alt="musical note"
            />
        </div>
    )
}

export default MusicNotes; 