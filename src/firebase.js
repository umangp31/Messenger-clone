import fs from "firebase/compat/app";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBPj3M4rO9e6KwvOLuvadfk8rwKlRXqYoM",
  databaseURL: "https://messenger-clone-a2136-default-rtdb.firebaseio.com",
  projectId: "messenger-clone-a2136",
  storageBucket: "messenger-clone-a2136.appspot.com",
  messagingSenderId: "20049121807",
  appId: "1:20049121807:web:15e4dcc4449ac6461ec97a",
  measurementId: "G-646QMQ224T",
};
const firebaseApp = fs.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;