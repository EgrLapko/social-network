import React from "react";
import { Post } from "./Post";

export const MyPosts = ({ posts }) => {
  return (
    <div className="posts-section">
      <h4 className="posts-title">My Posts</h4>
      <div className="posts-panel">
        <textarea></textarea>
        <button className="btn">Add Post</button>
        <button className="btn">Remove Post</button>
      </div>
      <div className="posts-container">
        {posts.map((post) => {
          return (
            <Post text={post.text} key={post.id} likesCount={post.likesCount} />
          );
        })}
      </div>
    </div>
  );
};
