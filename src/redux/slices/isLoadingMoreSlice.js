import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const isLoadingMoreSlice = createSlice({
  name: 'isLoadingMore',
  initialState,
  reducers: {
    setLoading(state, action) {
      state = action.payload;
      return state;
    }
  }
});

export const isLoadingMoreActions = isLoadingMoreSlice.actions;
export default isLoadingMoreSlice.reducer;