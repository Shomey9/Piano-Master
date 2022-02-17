import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import MusicNotes from './components/MusicNotes'
import Piano from './components/Piano.js';
import Scorebox from './components/Scorebox.js';
import Navbar from './components/Navbar.js';

function App() {
  


  const [testAnswer, setTestAnswer] = useState("")
  // console.log("testAnswer: ", testAnswer)
  const [userAnswer, setUAnswer] = useState("")
  // console.log("userAnswer: ", userAnswer)
  const [pressedKey, setPressedKey] = useState(false)
  // console.log("pressedKey: ", pressedKey)
  const [image, setImage] = useState(false)
  // console.log("Image state: ", image)
  const [score, setScore] = useState(0)
  
  // useEffect(()=>{
  //   if (testAnswer == userAnswer) {
  //     // setScore(score + 10)
  //     console.log("Please Record Score")
  //     // const x = score + 10
  //     // setScore(x)
  //     // console.log("Score: ", score)
  //   } else {
  //     console.log("Please Don't Record Score")
  //   }
  // }, [])

  const playAudio = () => {
    const audio = new Audio(
      `${userAnswer.toLowerCase()}.mp3`
    )
    // audio.duration = 0.2
    // audio.addEventListener('loadeddata', () => {
    //   let duration = audio.duration
    //   duration = 0.2
    // })
    audio.play();
  }
  if (pressedKey) {
    playAudio()
  }

  const dataFromPiano = (pianoData) => {
    // console.log("Data from Piano Component: ", pianoData)
    setUAnswer(pianoData)
    setPressedKey(true)
    setTimeout(()=>
    {
        setPressedKey(false)
    }, 2000
    
    )
    //  
  }

  // if (testAnswer == userAnswer) {
  //   // setScore(score + 10)
  //   console.log("Please Record Score")
  //   // const x = score + 10
  //   // setScore(x)
  //   // console.log("Score: ", score)
  // } else {
  //   console.log("Please Don't Record Score")
  // }

  // async const recordScore = () => {
  //   const response = await userAnswer
  // }

  // This promise is fulfilled with the return value from the async func, so this logs 1
  // Promise.then(console.log("My promise: ", testAnswer))

  // const recordScore = () => {

    

  // }
  
  

  // const gameScore = () => {
  //   for (let i = 0; i < 10; i++) {
  //     if ()
  //   }
  // }


  const dataFromMusicNotes = (musicNotesData) => {
    // console.log("Data from MusicNotes Component: ", musicNotesData)
    setTestAnswer(musicNotesData)
  }

  // async const handleClick = () => {
  //   setScore(score + 1)
  //   console.log("score: ", score)
  // }

  // handleClick().then(score=>setScore(score + 1))
  
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Scorebox />
        
        <MusicNotes 
          musicNotesData={dataFromMusicNotes}
        />
        <div>
        {
          pressedKey ? 
            <div className="indicator">
              {/* <p>I am pressed</p> */}
              {testAnswer === userAnswer
                  ?
                  (
                  <p>Correct, note was {testAnswer}!</p>
                  )
                    :
                  (
                    <p>Incorrect, note was {testAnswer}!</p>


                  )
              }
            </div>
              :
            <div className="indicator">
              
            </div>


          // testAnswer === userAnswer 
          //   ?
          // (
          //   <p>Correct!</p>
          // )
          //   :
          // (
          //   <p>Incorrect!</p>
          // )
        }
        </div>
        <Piano 
          pianoData={dataFromPiano}
          // onClick={handleClick}
        />



      </header>
    </div>
  );
}

export default App;
