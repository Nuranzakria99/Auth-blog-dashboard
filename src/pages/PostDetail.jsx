import React from "react";
import { useLoaderData } from "react-router-dom";
import PostItem from "../components/PostItem";

export default function PostDetail() {
  const post = useLoaderData();

  return (
    <PostItem post={post} />
  );
}
