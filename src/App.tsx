import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Posts from "./pages/Posts";
import NewPost from "./pages/NewPost";
import Auth from "./pages/Auth";
import Layout from "./pages/Root";
import PostDetail from "./pages/PostDetail";
import GuardingRoutes from "./components/GuardingRoutes";
import Error from './pages/Error'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {path: "dashboard",element: ( <GuardingRoutes><Dashboard /></GuardingRoutes> ),},
      {path: "posts",element: ( <GuardingRoutes><Posts /></GuardingRoutes> ),},
      {path: "posts/new",element: (<GuardingRoutes> <NewPost /></GuardingRoutes>),},
      { path: "posts/:postId", element: <PostDetail />},
      
    ],
  },
  { path: "/auth", element: <Auth /> },
  
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
