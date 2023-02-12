import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const registerUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

const loginUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

const logoutUser = () => {
  return signOut(auth);
};

const passwordResetEmail = (email) => {
  return sendPasswordResetEmail(auth, email);
};

const loginWithGoogle = () => {
  return signInWithPopup(auth, new GoogleAuthProvider());
};

const subscribeToAuthChanges = (handleAuthChange) => {
  onAuthStateChanged(auth, (user) => {
    handleAuthChange(user);
  });
};

const FirebaseAuth = {
  registerUser,
  loginUser,
  logoutUser,
  passwordResetEmail,
  loginWithGoogle,
  subscribeToAuthChanges,
};

export default FirebaseAuth;
