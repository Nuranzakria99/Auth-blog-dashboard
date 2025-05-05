import { postActions } from "./postSlice";

//Post
export const fetchPost = () => {
  return async (dispatch) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await res.json();
    dispatch(postActions.setPost(data));
  };
};

//Post count
export const getPostCount = () => {
  return async (dispatch) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await res.json();
    dispatch(postActions.setPostCount(data));
  };
};

//Create New Post
export const CreatePost = (newPost) => {
  return async (dispatch, getState) => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        Authorization: 'Bearer' + getState().auth.user.token,
        "content-type": "application/json",
      },
      body: JSON.stringify(newPost),
    });
    
    dispatch(postActions.setIsCreated());
    setTimeout(()=> (dispatch(postActions.clearIsCreated())), 2000)
    localStorage.setItem('Post', JSON.stringify(newPost))
  };
}


