import { fetchData } from '../../utils/fetchData';
import { store } from '../../store';
import { getRequestLoading, getRequestRetrieving, retrievePosts, uppendPosts } from '../actions';

const initialState = {
  allPosts: [],
  isFetching: false,
  isLoading: false
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
        store.dispatch(getRequestLoading());
      });
      return {
        ...state,
        isLoading: true,
      };
    case 'allPosts/uppendPosts':
      return {
        ...state,
        allPosts: [...state.allPosts, ...action.payload]
      };
    case 'allPosts/getRequestRetrieving':
      return {
        ...state,
        isFetching: false
      };
    case 'allPosts/getRequestRetrieving':
      return {
        ...state,
        isLoading: false
      };
    case 'allPosts/sendRequest':
      console.log(action.payload);
      fetchData(action.payload).then(dataFetched => {
        store.dispatch(retrievePosts(dataFetched));
        store.dispatch(getRequestRetrieving());
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
