import { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice({
  name: 'post',
  initialState: {
    post: [],
    isCreated: false,
  },
  reducers: {
    setPost: (state, action) => {
      state.post = action.payload;
    },
    setIsCreated: (state) => {
      state.isCreated = true;
    },
    clearIsCreated: (state) => {
      state.isCreated = false;
    },
  },
});

 const postReducer = postSlice.reducer;  
 const postActions = postSlice.actions;

 export { postReducer , postActions}