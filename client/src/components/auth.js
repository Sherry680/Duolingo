// Firebase initialization
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
};

firebase.initializeApp(firebaseConfig);

// User authentication
const auth = firebase.auth();

// Sign up
auth.createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // User registered successfully
    const user = userCredential.user;
  })
  .catch((error) => {
    // Handle registration error
    console.error(error);
  });

// Sign in
auth.signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // User signed in successfully
    const user = userCredential.user;
  })
  .catch((error) => {
    // Handle sign-in error
    console.error(error);
  });

// Sign out
auth.signOut()
  .then(() => {
    // User signed out successfully
  })
  .catch((error) => {
    // Handle sign-out error
    console.error(error);
  });

