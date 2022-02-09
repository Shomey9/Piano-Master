import { useState } from 'react';
import './App.css';
import MusicNotes from './components/MusicNotes'
import Piano from './components/Piano.js';
import Scorebox from './components/Scorebox.js';

function App() {
  const [testAnswer, setTestAnswer] = useState("")
  const [userAnswer, setUAnswer] = useState("")


  const dataFromPiano = (pianoData) => {
    console.log("Data from Piano: ", pianoData)
    setUAnswer(pianoData)
  }
  const dataFromMusicNotes = (musicNotesData) => {
    console.log("Data from MusicNotes: ", musicNotesData)
    setTestAnswer(musicNotesData)
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <Scorebox />
        
        <MusicNotes 
          musicNotesData={dataFromMusicNotes}
        />
        <div>
        {
          testAnswer === userAnswer 
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
        <Piano 
          pianoData={dataFromPiano}
        />
      </header>
    </div>
  );
}

export default App;
