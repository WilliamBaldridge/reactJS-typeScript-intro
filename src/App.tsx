import React, {useState} from 'react';
import './App.css';
import NoteForm from "./NoteForm"
import {log} from "util";

function App() {

    const [allNotes, setAllNotes] = useState({notes: []});

    function onNewNote(note: any) {

        console.log(console.log(note));
        setAllNotes({...allNotes, notes: [...allNotes.notes]})

    }

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Thinking Stream</h1>
      </header>
        <NoteForm onSubmit={onNewNote}/>
        <div className="notes-list">
            <h2>My Thoughts</h2>
            {allNotes.notes.map( (note: any) => <div className="note-item">{note.body}</div> )}
        </div>
    </div>
  );
}

export default App;
