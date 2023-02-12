import { useState } from "react";
import FirebaseAuth from "./FirebaseAuth";

const LoginForm = ({existingUser}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await FirebaseAuth.registerUser(username, password);
      setUsername("");
      setPassword("");
    } catch (error) {
      alert(error.message);
    }

  }

  function handleLogout() {
    FirebaseAuth.logoutUser();
  }

  return (
    <>
      <h1>Login</h1>
    </>
  );
};

export default LoginForm;
