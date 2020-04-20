const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

const initialState = {
  posts: [],
  postBody: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return { ...state, posts: state.posts.concat([action.payload]), postBody: " " };
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        postBody: action.payload,
      };
    default:
      return state;
  }
};

export const addPost = (post) => {
  return {
    type: ADD_POST,
    payload: post,
  };
};

export const updateNewPostText = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    payload: text,
  };
};

export default profileReducer;
