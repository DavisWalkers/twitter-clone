import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const isFetchingSlice = createSlice({
  name: 'isFecthing',
  initialState,
  reducers: {
    setFetch(state, action) {
      return state = action.payload;
    }
  }
});

export const isFetchingActions = isFetchingSlice.actions;
export default isFetchingSlice.reducer;