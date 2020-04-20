import React from "react";
import { Post } from "./Post";

import {
  addPost,
  updateNewPostText,
} from "../../../redux/reducers/profileReducer";

import { connect } from "react-redux";

const MyPosts = ({ addPost, updateNewPostText, postBody, posts }) => {
  const onPostChange = (e) => {
    let text = e.target.value;
    updateNewPostText(text);
  };

  const submitPost = () => {
    const newPost = {
      id: Date.now().toString(),
      text: postBody,
      likesCount: 0,
    };
    console.log(posts);

    addPost(newPost);
  };

  return (
    <div className="posts-section">
      <h4 className="posts-title">My Posts</h4>
      <div className="posts-panel">
        <textarea onChange={onPostChange} value={postBody} />
        <button className="btn" onClick={() => submitPost()}>
          Add Post
        </button>
      </div>
      <div className="posts-container">
        {posts.length === 0 ? (
          <h4>You dont have any posts yet</h4>
        ) : (
          posts.reverse().map((post) => {
            return (
              <Post
                text={post.text}
                key={post.id}
                likesCount={post.likesCount}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  postBody: state.profilePage.postBody,
  posts: state.profilePage.posts,
});

const mapDispatchToProps = (dispatch) => ({
  addPost: (post) => dispatch(addPost(post)),
  updateNewPostText: (text) => dispatch(updateNewPostText(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);
