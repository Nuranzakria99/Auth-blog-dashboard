import  {authActions } from "./authSlice";

//Login
export const login = (user) => {
    return async (dispatch) => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'content-type': 'application/json'
        }
      })
      const data = await res.json()
      dispatch(authActions.login(data))
      localStorage.setItem('userInfo', JSON.stringify(data))
    }
}

// Signup
export const signup = (NewUser) => {
  return async (dispatch) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: JSON.stringify(NewUser),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    dispatch(authActions.login(data));
    localStorage.setItem('userInfo', JSON.stringify(data));

  };
};
