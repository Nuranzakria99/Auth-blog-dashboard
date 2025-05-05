import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null, // parse covert from string to object
    signup: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      localStorage.setItem('userInfo', JSON.stringify(action.payload));
    },
    signup: (state, action) =>{
      state.signup = action.payload
    }
  },
});

 const authReducer = authSlice.reducer;  
 const authActions = authSlice.actions;

 export { authReducer , authActions}
