import { fetchData } from '../../utils/fetchData';
import { store } from '../../store';
import { getRequest, retrievePosts, uppendPosts } from '../actions';

const initialState = {
  allPosts: [],
  isFetching: false
};

export const allPostsReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'allPosts/addPost':
      return {
        ...state,
        allPosts: [...state.allPosts, action.payload]
      };
    case 'allPosts/removePost':
      return {
        ...state,
        allPosts: state.allPosts.filter(
          element => element.id !== action.payload
        )
      };
    case 'allPosts/retrievePosts':
      return {
        ...state,
        allPosts: action.payload
      };
    case 'allPosts/loadPosts':
      fetchData(action.payload).then(dataFetched => {
        store.dispatch(uppendPosts(dataFetched));
        store.dispatch(getRequest());
      });
      return {
        ...state,
        isFetching: true,
      };
    case 'allPosts/uppendPosts':
      return {
        ...state,
        allPosts: [...state.allPosts, ...action.payload]
      };
    case 'allPosts/getRequest':
      return {
        ...state,
        isFetching: false
      };
    case 'allPosts/sendRequest':
      console.log(action.payload);
      fetchData(action.payload).then(dataFetched => {
        store.dispatch(retrievePosts(dataFetched));
        store.dispatch(getRequest());
      });
      return {
        ...state,
        isFetching: true,
      };
    default: 
      return {
        ...state
      };
  }
};
