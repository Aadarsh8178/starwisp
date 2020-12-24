import React, { useState } from "react";
import dummyuser from "../../assets/dummyuser.png";
import PostInput from "../../components/PostInput";
import PostCard from "../../components/PostCard";
import { Wrapper } from "./styles.js";

function Posts(props) {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    let newPosts = [];

    let date = new Date();
    let time = "am";
    let hours = date.getHours();
    let minutes = date.getMinutes();
    if (hours > 12) {
      time = "pm";
      hours -= 12;
    }
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    newPosts.push({
      username: "username",
      post,
      imglink: dummyuser,
      time: hours + ":" + minutes + " " + time,
      comments: [],
    });
    newPosts = [...newPosts, ...posts];
    setPosts(newPosts);
  };

  const addComment = (postIndex, comment) => {
    const newPost = {
      ...posts[postIndex],
      comments: [...posts[postIndex].comments],
    };

    newPost.comments.splice(0, 0, comment);
    const newPosts = [...posts];
    newPosts[postIndex] = newPost;
    setPosts(newPosts);
  };
  return (
    <Wrapper>
      <PostInput onSubmit={addPost} />
      {posts.map((post, idx) => (
        <PostCard
          key={post.time}
          post={post}
          addComment={(comment) => addComment(idx, comment)}
        />
      ))}
    </Wrapper>
  );
}

export default Posts;
