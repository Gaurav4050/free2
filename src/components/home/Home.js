import React, { useState, useEffect } from "react";
// import NewNote from "./components/NewNote";
import NewNote from "../NewNote";
import Header from "../Header";
// import CreateCard from "./components/minors/CreateCard";
import CreateCard from "../minors/CreateCard";
import ls from "local-storage";
import Footer from "../Footer";

const Home = () => {
  const nullNote = { id: 9999999, title: "NULL", note: "NULL" };
  const storedNotes = JSON.parse(ls.get("notes")) || [nullNote];

  const [notes, setNotes] = useState(storedNotes);

  useEffect(() => {
    ls("notes", JSON.stringify(notes.filter((note) => note.id !== 9999999)));
  }, [notes]);

  const addNote = (title, content) => {
    const newId = Math.round(Math.random() * 100);
    setNotes((prevNotes) => [
      ...prevNotes,
      { id: newId, title, note: content },
    ]);
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const saveNote = (id, content) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, note: content } : note
      )
    );
  };
  return (
    <>
      <Header />

      <NewNote add={addNote} />
      <div className="row">
        {notes.map((note) =>
          CreateCard(notes, setNotes, note, deleteNote, saveNote)
        )}
      </div>
      <Footer />
    </>
  );
};

export default Home;
