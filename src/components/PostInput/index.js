import React, { useState } from "react";
import { InputWrapper, Buttons } from "./styles";

function PostInput({ onSubmit }) {
  const [postdata, setPostData] = useState("");
  const handleSubmit = () => {
    onSubmit(postdata);
    setPostData("");
  };
  return (
    <InputWrapper>
      <textarea
        value={postdata}
        onChange={(e) => setPostData(e.target.value)}
        placeholder="Share something with your class.."
      />
      <Buttons>
        <p onClick={() => setPostData("")}>Cancel</p>
        <button disabled={postdata === ""} onClick={handleSubmit}>
          Share
        </button>
      </Buttons>
    </InputWrapper>
  );
}

export default PostInput;
