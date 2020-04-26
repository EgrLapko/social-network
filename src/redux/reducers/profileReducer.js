const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

const initialState = {
  posts: [],
  postBody: "",
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: state.posts.concat([action.payload]),
        postBody: " ",
      };
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        postBody: action.payload,
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    default:
      return state;
  }
};

export const addPost = (post) => ({
  type: ADD_POST,
  payload: post,
});

export const updateNewPostText = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  payload: text,
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  payload: profile,
});

export default profileReducer;
