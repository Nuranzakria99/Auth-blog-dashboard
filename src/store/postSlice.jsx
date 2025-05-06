import { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice({
  name: 'post',
  initialState: {
    post: localStorage.getItem('post') ? JSON.parse(localStorage.getItem('post')) : [],
    isCreated: false,
  },
  reducers: {
    setPost: (state, actions) => {
        state.post = actions.payload
    },
    setIsCreated: (state) => {
      state.isCreated = true
    },
    clearIsCreated: (state) => {
      state.isCreated = false
    }

  }
});

 const postReducer = postSlice.reducer;  
 const postActions = postSlice.actions;

 export { postReducer , postActions}