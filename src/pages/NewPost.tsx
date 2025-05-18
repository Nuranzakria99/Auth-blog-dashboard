import React , {useEffect} from "react";
import { Form } from "react-router-dom";
import { useInput } from "../hooks/useInputs"; 
import { useDispatch , useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { CreatePost } from "../store/postSliceCall";
import { RootState, AppDispatch } from "../store";


export default function NewPost() {
  const title = useInput("");
  const content = useInput<HTMLTextAreaElement>("");
  const dispatch = useDispatch<AppDispatch>();
  const {isCreated} = useSelector((state: RootState) => state.post)
  const navigate = useNavigate()

  function handleSubmit(e: React.FormEvent) {
     e.preventDefault();
    const data = { title: title.value, body: content.value}

    dispatch(CreatePost(data))
    
  }

  useEffect(() => {
    if (isCreated){
      navigate('/posts')
    }
  },[isCreated, navigate])
  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Create New Post</h1>
      <form onSubmit={handleSubmit}  className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Post Title</label>
          <input
          value={title.value}
          onChange={title.onChange}
            type="text"
            placeholder="Enter post title"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Post Content</label>
          <textarea
            placeholder="Write your post content here..."
            value={content.value}
            onChange={content.onChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800"
            rows={5}
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition"
        >
          Submit Post
        </button>
      </form>
    </div>
  );
}
