import React from "react";
import { Post } from "./Post";

export const MyPosts = () => {
  return (
    <div className="posts">
      <h4>My Posts</h4>
      <div>
        <textarea></textarea>
        <button className="btn">Add Post</button>
        <button className="btn">Remove Post</button>
      </div>
      <div className="posts-container">
        <Post text="I am writing this just because I can" />
        <Post text="This website doesnt work yet!!" />
        <Post text="SET ME FREE!" />
      </div>
    </div>
  );
};
