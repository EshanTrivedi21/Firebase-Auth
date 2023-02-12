import React, { useState } from "react";
import FirebaseAuth from "./FirebaseAuth";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";

function App() {
  const [user, setUser] = useState(null);
  FirebaseAuth.subscribeToAuthChanges(setUser);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login existingUser={user} />,
    },
    {
      path: "/signup",
      element: <Signup existingUser={user} />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
