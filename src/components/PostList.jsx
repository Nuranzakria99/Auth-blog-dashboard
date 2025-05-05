import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../store/postSliceCall";

export default function PostList() {
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(fetchPost());
  }, [dispatch]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">📚 Posts</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
        {post &&
          post.slice(0, 4).map((post) => (
            <li key={post.id}>
              <Link
                to={`/posts/${post.id}`}
                className="block p-6 bg-white rounded-2xl shadow hover:shadow-lg border border-gray-100 transition duration-300"
              >
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  {post.title}
                </h2>
                <p>
                {post.body}
                </p>
                <p className="text-sm text-gray-500">
                  Click to read more &rarr;
                </p>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}


