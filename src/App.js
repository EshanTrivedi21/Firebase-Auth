import React, { useState } from "react";
import FirebaseAuth from "./FirebaseAuth";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

function App() {
  const [user, setUser] = useState(null);
  FirebaseAuth.subscribeToAuthChanges(setUser);
  return (
    <RouterProvider router={router}>
      <Home />
      <Login existingUser={user} />
      <Signup existingUser={user} />
    </RouterProvider>
  );
}

export default App;
