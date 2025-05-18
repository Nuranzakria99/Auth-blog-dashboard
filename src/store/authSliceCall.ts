import { authActions } from './authSlice';
import { AppDispatch } from '../store';

interface User {
  email: string;
  password: string;
  token?: string;
}

// Login
export const login = (user: User) => {
  return async (dispatch: AppDispatch) => {
    const storedUserStr = localStorage.getItem('userInfo');
    const storedUser: User | null = storedUserStr ? JSON.parse(storedUserStr) : null;

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

    const users: User[] = await res.json();

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
export const signup = (newUser: User) => {
  return async (dispatch: AppDispatch) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: JSON.stringify(newUser),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    const userWithPassword: User = { ...data, password: newUser.password };

    dispatch(authActions.login(userWithPassword));
    localStorage.setItem('userInfo', JSON.stringify(userWithPassword));
  };
};

