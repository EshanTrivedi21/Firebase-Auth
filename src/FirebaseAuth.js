import firebase from './FirebaseConfig';
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
} from 'firebase/auth';

const auth = firebase.auth();

const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
}

const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
}

const logoutUser = () => {
    return signOut();
}

const passwordResetEmail = (email) => {
    return sendPasswordResetEmail(auth, email);
}

const loginWithGoogle = () => {
    return signInWithPopup(auth, new GoogleAuthProvider());
}

const subscribeToAuthChanges = (handleAuthChange) => {
    onAuthStateChanged(
        auth, (user) => {
            handleAuthChange(user);
        },
    );
}

const FirebaseAuth = {
    registerUser,
    loginUser,
    logoutUser,
    passwordResetEmail,
    loginWithGoogle,
    subscribeToAuthChanges,
}

export default FirebaseAuth;