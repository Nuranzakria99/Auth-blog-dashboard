import { AppDispatch, RootState } from "../store";
import { postActions } from "./postSlice";
import {PostType} from "../types"

//Post
export const fetchPost = () => {
  return async (dispatch : AppDispatch) => {
    const localPosts: PostType[] = JSON.parse(localStorage.getItem("localPosts") || "[]");

    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });

    const apiPosts = await res.json();

    // Combine: local posts appear on top
    const combinedPosts = [...localPosts, ...apiPosts];

    dispatch(postActions.setPost(combinedPosts));
  };
};

// Create New Post
export const CreatePost = (newPost: PostType) => {
   return async (dispatch: AppDispatch, getState: () => RootState) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        Authorization: 'Bearer ' + getState().auth.user?.token,
        "content-type": "application/json",
      },
      body: JSON.stringify(newPost),
    });

    const createdPost = await res.json();
        const localPosts: PostType[] = JSON.parse(localStorage.getItem("localPosts") || "[]");
    const updatedLocalPosts = [createdPost, ...localPosts];
    localStorage.setItem("localPosts", JSON.stringify(updatedLocalPosts));
    dispatch(postActions.setIsCreated());
    setTimeout(() => dispatch(postActions.clearIsCreated()), 2000);
    dispatch(fetchPost());
  };
};





