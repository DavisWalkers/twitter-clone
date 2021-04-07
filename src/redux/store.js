import isFetchingReducer from './slices/isFetchingSlice';
import isLoadingMoreReducer from './slices/isLoadingMoreSlice';
import { getFromLS, setLS } from '../utils/localStorage';
import { configureStore } from '@reduxjs/toolkit';
import { default as postsReducer } from '../redux/slices/postsSlice';
import { loadInitialData } from '../utils/loadInitialData';

// Example state of store
// {
//   posts: [
//     {
//       id: 0,
//       title: 'Fetching',
//       body: 'Fetching', 
//       img: 'https://picsum.photos/500/800?sig=0'
//     },
//     {
//       id: 1,
//       title: 'Fetching',
//       body: 'Fetching', 
//       img: 'https://picsum.photos/500/800?sig=1'
//     }
// ];
//   isFetching: false,
//   isLoadingMore: false
// }

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    isFetching: isFetchingReducer,
    isLoadingMore: isLoadingMoreReducer,
  }
}); 

const pageId = 1;
loadInitialData(pageId);

const myPostsLS = getFromLS();

if (!myPostsLS) {
  setLS();
}