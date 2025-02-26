import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"
import PrivatePage from "./components/PrivatePage/PrivatePage"

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const router = createBrowserRouter([
    { path: "/login", element: <Login /> },
    { path: "/", element: <Register /> },
    { 
      path: "/private",
      element: isAuthenticated ? <PrivatePage /> : <Login />
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
