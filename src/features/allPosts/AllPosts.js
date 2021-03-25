import { fetchData } from '../../utils/fetchData';
import { store } from '../../store';
import {  
  getRequestLoading, 
  getRequestRetrieving, 
  retrievePosts, 
  uppendPosts 
} from '../actions';
import { getFromLS } from '../../utils/localStorage';

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
    case 'allPosts/getRequestLoading':
      return {
        ...state,
        isLoadingMore: false
      };
    case 'allPosts/sendRequest':
      fetchData(action.payload).then(dataFetched => {
        store.dispatch(retrievePosts(dataFetched));
        store.dispatch(uppendPosts(getFromLS()));
        store.dispatch(getRequestRetrieving());
      });
      return {
        ...state,
        isFetching: true,
      };
    case 'allPosts/removePost':
      return {
        ...state,
        allPosts: state.allPosts.filter(element => {
          return element.id !== action.payload;
        }),
        myPosts: state.myPosts.filter(element => {
          return element.id !== action.payload;
        })
      }
    case 'myPosts/addPost':
      return {
        ...state,
        myPosts: [...state.myPosts, action.payload]
      };
    case 'myPosts/uploadPosts':
      return {
        ...state,
        myPosts: action.payload
      }
    default: 
      return {
        ...state
      };
  }
};
