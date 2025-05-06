import React from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/authSlice';

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authActions.logout());
  };

  return <button className='bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition' onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;