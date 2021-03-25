const ADD_POST = 'allPosts/addPost';
const RETRIEVE_POSTS = 'allPosts/retrievePosts';
const LOAD_POSTS = 'allPosts/loadPosts';
const UPPEND_POSTS = 'allPosts/uppendPosts';
const SEND_REQUEST = 'allPosts/sendRequest';
const GET_REQUEST_RETRIEVING = 'allPosts/getRequestRetrieving';
const GET_REQUEST_LOADING = 'allPosts/getRequestLoading'
const ADD_MY_POST = 'myPosts/addPost';
const UPLOAD_MY_POSTS = 'myPosts/uploadPosts';
const REMOVE_POST = 'allPosts/removePost';
const UPDATE_POST = 'myPosts/updatePost';

const addPost = (post) => {
  return {
    type: ADD_POST,
    payload: post
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

const getRequestRetrieving = () => {
  return {
    type: GET_REQUEST_RETRIEVING,
  };
};

const getRequestLoading = () => {
  return {
    type: GET_REQUEST_LOADING,
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

const addMyPost = (post) => {
  return {
    type: ADD_MY_POST,
    payload: post
  };
};

const uploadMyPosts = (posts) => {
  return {
    type: UPLOAD_MY_POSTS,
    payload: posts
  };
};

const removePost = (id) => {
  return {
    type: REMOVE_POST,
    payload: id
  };
};

const updatePost = (post) => {
  return {
    type: UPDATE_POST,
    payload: post
  };
};

export { 
  addPost, 
  retrievePosts, 
  sendRequest, 
  getRequestRetrieving, 
  getRequestLoading,
  uppendPosts, 
  loadPosts,
  addMyPost,
  uploadMyPosts,
  removePost,
  updatePost
};
