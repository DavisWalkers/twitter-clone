const ADD_POST = 'allPosts/addPost';
const REMOVE_POST = 'allPosts/removePost';
const RETRIEVE_POSTS = 'allPosts/retrievePosts';
const LOAD_POSTS = 'allPosts/loadPosts';
const UPPEND_POSTS = 'allPosts/uppendPosts';
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

const retrievePosts = (posts) => {
  return {
    type: RETRIEVE_POSTS,
    payload: posts
  };
};

const sendRequest = (pageId) => {
  return {
    type: SEND_REQUEST,
    payload: pageId
  };
};

const getRequest = () => {
  return {
    type: GET_REQUEST,
  };
};

const uppendPosts = (posts) => {
  return {
    type: UPPEND_POSTS,
    payload: posts
  }
};

const loadPosts = (pageId) => {
  return {
    type: LOAD_POSTS,
    payload: pageId
  };
};

export { 
  addPost, 
  removePost, 
  retrievePosts, 
  sendRequest, 
  getRequest, 
  uppendPosts, 
  loadPosts 
};
