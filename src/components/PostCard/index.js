import React, { useState } from "react";
import {
  StyledPost,
  Content,
  Header,
  Comments,
  Comment,
  Wrapper,
  InputWrapper,
} from "./styles";

import { ReactComponent as SendIcon } from "../../assets/send.svg";

function PostCard({
  post: { username, time, post, imglink, comments },
  addComment,
}) {
  const [comment, setComment] = useState("");
  const [show, setShow] = useState(false);

  const handleComment = () => {
    addComment(comment);
    setComment("");
  };
  if (!username) {
    return <></>;
  }
  return (
    <Wrapper>
      <StyledPost>
        <div className="image">
          <img src={imglink} alt="user" />
        </div>
        <Content>
          <Header>
            <p>{username}</p>
            <small>{time}</small>
          </Header>
          <p className="post">{post}</p>
        </Content>
      </StyledPost>
      <div onClick={() => setShow((p) => !p)} className="hideandshow">
        {show ? "Hide Comments" : "Show Comments"}
      </div>
      <Comments show={show}>
        <Comment>
          <div className="image">
            <img src={imglink} alt="user" />
          </div>
          <InputWrapper>
            <input
              placeholder="Write a comment.."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <SendIcon onClick={handleComment} />
          </InputWrapper>
        </Comment>
        {comments.map((comment, idx) => (
          <Comment>
            <div className="image commented">
              <img src={imglink} alt="user" />
            </div>
            <div key={idx}>
              <p>{comment}</p>
            </div>
          </Comment>
        ))}
      </Comments>
    </Wrapper>
  );
}

export default PostCard;
