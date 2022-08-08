import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import NoteList from "./components/NoteList";
import Searchbar from "./components/Searchbar";

const App = () => {
  const [notes, setNotes] = useState(
    JSON.parse(
      localStorage.getItem("item") || [
        {
          id: nanoid(),
          text: "This is my first note",
          date: "8/1/21",
        },
        {
          id: nanoid(),
          text: "This is my second note",
          date: "8/4/21",
        },
        {
          id: nanoid(),
          text: "This is my tird note",
          date: "8/7/21",
        },
      ]
    )
  );

  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };

    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const editNote = (id, text) => {
    const date = new Date();
    const index = notes.findIndex((note) => note.id === id);
    const newNotes = [...notes];
    newNotes[index].text = text;
    newNotes[index].date = date.toLocaleDateString();
    setNotes(newNotes);
  };
  console.log(notes);

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  // useEffect(() => {
  //   const savedNotes = JSON.parse(localStorage.getItem("item"));
  //   if (savedNotes) {
  //     setNotes(savedNotes);
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header darkMode={darkMode} handleToggleDarkMode={setDarkMode} />
        <Searchbar handleSearchNote={setSearchText} />
        <NoteList
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
          handleEditNote={editNote}
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
        />
      </div>
    </div>
  );
};

export default App;
