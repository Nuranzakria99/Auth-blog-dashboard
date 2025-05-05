import React from "react";
import { Form, Link, useSearchParams  } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from '../store/authSliceCall'
import { signup } from '../store/authSliceCall'
import { useInput } from "../hooks/useInputs";
import { useNavigate } from 'react-router-dom'

export default function AuthForm() {
  const [searchParms] = useSearchParams();
  const isLogin = searchParms.get("mode") === "login";
  const email = useInput("");
  const password = useInput("");
  const dispach = useDispatch()
  const navigate = useNavigate()

  async function handelSumbit(e) {
    e.preventDefault();
    const Data = { email: email.value, password: password.value };
  
    try {
      if (isLogin) {
        await dispach(login(Data));
      } else {
        await dispach(signup(Data));
      }
  
      navigate('/dashboard'); 
    } catch (error) {
      console.error('Auth failed:', error);
     
    }
  }
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Form onSubmit={handelSumbit} className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md space-y-6">
        <h1 className="text-2xl font-bold text-center text-gray-800">
          {isLogin ? "Login" : "Signup"}
        </h1>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            value={email.value}
            onChange={email.onChange}
            type="email"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            value={password.value}
            onChange={password.onChange}
            type="password"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700 transition"
        >
          {isLogin ? "Login" : "Signup"}
        </button>

        <p className="text-center text-sm text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <Link
            to={`?mode=${isLogin ? "signup" : "login"}`}
            className="text-gray-800 hover:underline"
          >
            {isLogin ? "Signup" : "Login"}
          </Link>
        </p>
      </Form>
    </div>
  );
}
