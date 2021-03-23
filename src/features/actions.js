const ADD_POST = 'allPosts/addPost';
const REMOVE_POST = 'allPosts/removePost';
const LOAD_POSTS = 'allPosts/loadPosts';
const SEND_REQUEST = 'allPosts/sendRequest';
const GET_REQUEST = 'allPosts/getRequest';

const addPost = (post) => {
  return {
    type: ADD_POST,
    payload: post
  };
};

const removePost = (id) => {
  return {
    type: REMOVE_POST,
    payload: id
  };
};

const loadPosts = (posts) => {
  return {
    type: LOAD_POSTS,
    payload: posts
  };
};

const sendRequest = (url) => {
  return {
    type: SEND_REQUEST,
    payload: url
  };
};

const getRequest = () => {
  return {
    type: GET_REQUEST,
  };
};

export { addPost, removePost, loadPosts, sendRequest, getRequest };
