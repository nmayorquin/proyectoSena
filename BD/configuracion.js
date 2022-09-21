// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnAurC2Hi-6m92vL-dOlkUoR52mCBUXsY",
  authDomain: "thebestteam-a68c8.firebaseapp.com",
  databaseURL: "https://thebestteam-a68c8-default-rtdb.firebaseio.com",
  projectId: "thebestteam-a68c8",
  storageBucket: "thebestteam-a68c8.appspot.com",
  messagingSenderId: "874646283852",
  appId: "1:874646283852:web:54c0b1feea42b04debf6e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

const auth = getAuth();

export  {app, database, auth,};