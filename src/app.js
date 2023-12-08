
import React, { useState, useEffect } from "react";
import Header from "./components/Header"; 
import Footer from "./components/Footer"; 
import NewNote from "./components/NewNote"; 
import CreateCard from "./components/minors/CreateCard"; 
import ls from "local-storage";

function App() {
  const nullNote = { id: 9999999, title: "NULL", note: "NULL" };
  const storedNotes = JSON.parse(ls.get("notes")) || [nullNote];

  const [notes, setNotes] = useState(storedNotes);

  useEffect(() => {
    ls("notes", JSON.stringify(notes.filter(note => note.id !== 9999999)));
  }, [notes]);

  const addNote = (title, content) => {
    const newId = Math.round(Math.random() * 100);
    setNotes(prevNotes => [
      ...prevNotes,
      { id: newId, title, note: content },
    ]);
  };

  const deleteNote = id => {
    setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
  };

  const saveNote = (id, content) => {
    setNotes(prevNotes =>
      prevNotes.map(note =>
        note.id === id ? { ...note, note: content } : note
      )
    );
  };

  return (
    <div>
      <Header />
      <NewNote add={addNote} />
      <div className="row">
        {notes.map(note => CreateCard(note, deleteNote, saveNote))}
      </div>
      <Footer />
    </div>
  );
}

export default App;