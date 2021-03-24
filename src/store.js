import { createStore } from 'redux';
import { data } from './data';
import { loadPosts, sendRequest } from './features/actions';
import { allPostsReducer } from './features/allPosts/AllPosts';

// Example state of store
// {
//   allPosts: [
//     {
//       id: 1,
//       title: 'Title',
//       body: 'Body',
//       img: 'url_to_img'
//     },
//     ...
//   ],
//   isFetching: false
// }

export const store = createStore(allPostsReducer);

store.dispatch(loadPosts(data));

const url = 'https://gorest.co.in/public-api/posts';
store.dispatch(sendRequest(url));
