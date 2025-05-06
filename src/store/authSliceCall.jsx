import  {authActions } from "./authSlice";

//Login
export const login = (user) => {
  return async (dispatch) => {
    // Check localStorage for an existing user
    const storedUser = JSON.parse(localStorage.getItem('userInfo'));
    if (storedUser && storedUser.email === user.email && storedUser.password === user.password) {
      dispatch(authActions.login(storedUser));
      return;
    }

    const res = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const users = await res.json();
    const existingUser = users.find(
      (u) => u.email === user.email && u.password === user.password
    );

    if (!existingUser) {
      throw new Error('User not found. Please sign up first.');
    }

    dispatch(authActions.login(existingUser));
    localStorage.setItem('userInfo', JSON.stringify(existingUser));
  };
};

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
    const userWithPassword = { ...data, password: NewUser.password };

    dispatch(authActions.login(userWithPassword));
    localStorage.setItem('userCred', JSON.stringify(userWithPassword));
  };
};
