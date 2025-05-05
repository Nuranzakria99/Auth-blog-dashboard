import React from "react";

export default function PostItem({ post }) {
  return (
    <div className="p-4 border rounded bg-white shadow">
      <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
      <p>{post.body}</p>
      <p className="text-sm text-gray-500 mt-4">Post ID: {post.id}</p>
    </div>
  );
}
