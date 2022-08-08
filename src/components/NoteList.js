import React from "react";
import AddNote from "./AddNote";
import Notes from "./Notes";

const NoteList = ({
  notes,
  handleAddNote,
  handleDeleteNote,
  handleEditNote,
}) => {
  return (
    <div className="note-list">
      {notes.map(({ id, text, date }) => (
        <Notes
          id={id}
          text={text}
          date={date}
          handleDeleteNote={handleDeleteNote}
          handleEditNote={handleEditNote}
        />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};

export default NoteList;
