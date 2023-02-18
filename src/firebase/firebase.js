// Function imports from SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// Add SDKs for Firebase products
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth"; // auth
import { getFirestore } from "firebase/firestore"; // firestore
import { getDatabase } from "firebase/database"; // rtdb

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5T3kzRleStHc5duGbTsAIGCAJQOkxmMw",
  authDomain: "csus-hackathon-2023.firebaseapp.com",
  databaseURL: "https://csus-hackathon-2023-default-rtdb.firebaseio.com",
  projectId: "csus-hackathon-2023",
  storageBucket: "csus-hackathon-2023.appspot.com",
  messagingSenderId: "324799763719",
  appId: "1:324799763719:web:6cab33f106736f5be221a2",
  measurementId: "G-M33WE4QHFZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);
