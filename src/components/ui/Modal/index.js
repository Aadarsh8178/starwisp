import React, { useState } from "react";
import { StyledModal, InputGroup, Buttons } from "./styles";

function Modal({ onSubmit, show, setShow }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleDesc = (e) => {
    setDesc(e.target.value);
  };
  const handleClose = () => {
    setShow(false);
    setTitle("");
    setDesc("");
  };
  const handleSubmit = (e) => {
    onSubmit({ title, desc });
    handleClose();
  };
  return (
    <StyledModal show={show}>
      <InputGroup>
        <label>Title</label>
        <input value={title} onChange={handleTitle} />
      </InputGroup>
      <InputGroup>
        <label>Description</label>
        <input value={desc} onChange={handleDesc} />
      </InputGroup>
      <Buttons>
        <button
          onClick={handleSubmit}
          className="submit"
          disabled={title === "" || desc === ""}
        >
          Submit
        </button>
        <button onClick={handleClose} className="close">
          Close
        </button>
      </Buttons>
    </StyledModal>
  );
}

export default Modal;
