import { useState } from 'react';
import './App.css';
import MusicNotes from './components/MusicNotes'
import Piano from './components/Piano.js';
import Scorebox from './components/Scorebox.js';
import Navbar from './components/Navbar.js';

function App() {
  const [testAnswer, setTestAnswer] = useState("")
  console.log("testAnswer: ", testAnswer)
  const [userAnswer, setUAnswer] = useState("")
  console.log("userAnswer: ", userAnswer)
  const [pressedKey, setPressedKey] = useState(false)
  console.log("pressedKey: ", pressedKey)
  

  const dataFromPiano = (pianoData) => {
    console.log("Data from Piano Component: ", pianoData)
    setUAnswer(pianoData)
    setPressedKey(true)
    setTimeout(()=>
    {
        setPressedKey(false)
    }, 2000
);
  }
  const dataFromMusicNotes = (musicNotesData) => {
    console.log("Data from MusicNotes Component: ", musicNotesData)
    setTestAnswer(musicNotesData)
  }
 
  //Make a ternary that 
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
            <div>
              {/* <p>I am pressed</p> */}
              {testAnswer === userAnswer
                  ?
                  (
                  <p>Correct!</p>
                  )
                    :
                  (
                    <p>Incorrect!</p>


                  )
              }
            </div>
              :
            <div>
              <br></br><br></br>
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
        />



      </header>
    </div>
  );
}

export default App;
