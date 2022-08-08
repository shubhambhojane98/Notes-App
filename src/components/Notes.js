import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import EditNote from "./EditNote";

const Notes = ({ id, text, date, handleDeleteNote, handleEditNote }) => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <section>
      {isEdit ? (
        <EditNote
          id={id}
          text={text}
          handleEditNote={handleEditNote}
          setEdit={setIsEdit}
        />
      ) : (
        <>
          <div className="note">
            <div className="note-body">
              <span>{text}</span>
              <MdEdit
                onClick={() => setIsEdit(!isEdit)}
                className="edit-icon"
                size="1.3em"
              />
            </div>
            <div className="note-footer">
              <small>{date}</small>
              <MdDeleteForever
                onClick={() => handleDeleteNote(id)}
                className="delete-icon"
                size="1.3em"
              />
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Notes;
