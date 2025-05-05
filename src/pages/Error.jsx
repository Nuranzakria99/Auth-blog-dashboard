import React from "react";
import { Link , useRouteError } from "react-router-dom";

export default function Error() {
    const error = useRouteError()
    let title = 'An error occurred'
    let message = 'Something went wrong'

    if (error.status === 500){
        message = JSON.parse(error.data).message
    }

    if (error.status === 404){
        title = 'Not Found'
        message = 'Could not find resource or page'
    }
    return (
        <>
      
        <div  className="flex-1 flex-col items-center justify-center p-4">
        <h1 className="text-5xl font-bold text-red-600 mb-4">{title}</h1>
        <p className="text-lg text-gray-700 mb-2">{message}</p>
        <Link
        to="/"
        className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
      >
        Go back
      </Link>
        </div>
        
        </>
    )
  }