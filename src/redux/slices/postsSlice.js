import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 0,
    title: 'Fetching',
    body: 'Fetching', 
    img: 'https://picsum.photos/500/800?sig=0'
  },
  {
    id: 1,
    title: 'Fetching',
    body: 'Fetching', 
    img: 'https://picsum.photos/500/800?sig=1'
  }
];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost(state, action) {
      state.push(action.payload);
    },
    retrievePosts(state, action) {      
      return action.payload;
    },
    uppendPosts(state, action) {
      state.push(...action.payload);
    },
    removePost(state, action) {
      return state.filter(element => {
        return element.id !== action.payload;
      })
    },
    updatePost(state, action) {
      return state.map(post => {
        if (post.id === action.payload.id) {
          return action.payload;
        } else {
          return post;
        }
      });
    },
  }
});

export const postsActions = postsSlice.actions;
export default postsSlice.reducer;