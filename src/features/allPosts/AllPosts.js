import { fetchData } from '../../utils/fetchData';
import { store } from '../../store';
import { getRequest, loadPosts } from '../actions';

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
    case 'allPosts/loadPosts':
      return {
        ...state,
        allPosts: action.payload
      };
    case 'allPosts/loadImages':
      return {
        ...state,
        allPosts: state.allPosts.map(
          element => {
            action.payload.forEach(imgSrc => {
              return {
                ...element,
                img: imgSrc
              };
            });
          }
        )
      };
    case 'allPosts/getRequest':
      return {
        ...state,
        isFetching: false
      };
    case 'allPosts/sendRequest':
      fetchData(action.payload).then(dataFetched => {
        store.dispatch(loadPosts(dataFetched));
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
