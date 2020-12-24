import React, { useState } from "react";
import Modal from "../ui/Modal";
import { Card } from "../../globalStyles";
import { NotepadWrapper, AddButton, Notes } from "./styles";

function Notepad(props) {
  const [notes, setNotes] = useState([
    {
      title: "Title",
      desc: "adsadsdada",
    },
  ]);
  const [show, setShow] = useState(false);
  const addNotes = (note) => {
    const newNotes = [...notes];
    newNotes.push(note);
    setNotes(newNotes);
  };
  return (
    <>
      <Modal onSubmit={addNotes} show={show} setShow={setShow} />
      <Card style={{ marginRight: "1.5rem" }}>
        <p style={{ textAlign: "left", fontSize: "30px" }}>Notepad</p>
        <NotepadWrapper>
          <Notes>
            {notes.map((note, idx) => (
              <p key={idx}>
                {note.title}
                <span>{note.desc}</span>
              </p>
            ))}
          </Notes>
          <div className="sideButton">
            <AddButton onClick={() => setShow(true)}>+</AddButton>
          </div>
        </NotepadWrapper>
      </Card>
    </>
  );
}

export default Notepad;
