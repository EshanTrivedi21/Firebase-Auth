import LoginForm from './LoginForm';
import React, { useState } from 'react';
import FirebaseAuth from './FirebaseAuth';

function App() {

  const [user, setUser] = useState(null);
  FirebaseAuth.subscribeToAuthChanges(setUser);
  return (
    <>
      <LoginForm existingUser={user} />
    </>
  );
}

export default App;
