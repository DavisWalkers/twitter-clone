import { fetchData } from '../../utils/fetchData';
import { store } from '../../store';
import { 
  addPost, 
  getRequestLoading, 
  getRequestRetrieving, 
  retrievePosts, 
  uppendPosts 
} from '../actions';

const initialState = {
  allPosts: [],
  myPosts: [],
  isFetching: false,
  isLoadingMore: false
};

export const allPostsReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'allPosts/addPost':
      return {
        ...state,
        allPosts: [...state.allPosts, action.payload]
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
        isLoadingMore: true,
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
        isLoadingMore: false
      };
    case 'allPosts/sendRequest':
      fetchData(action.payload).then(dataFetched => {
        store.dispatch(retrievePosts(dataFetched));
        store.dispatch(getRequestRetrieving());
      });
      return {
        ...state,
        isFetching: true,
      };
    case 'myPosts/addPost':
      return {
        ...state,
        myPosts: [...state.myPosts, action.payload]
      };
    default: 
      return {
        ...state
      };
  }
};
