import { createStore } from 'redux';
import { initialData } from './utils/initialData';
import { retrievePosts, sendRequest } from './features/actions';
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

store.dispatch(retrievePosts(initialData));

const pageId = 1;
store.dispatch(sendRequest(pageId));
