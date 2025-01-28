// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBygFyC3t3buDNSWRYwU4WG7GH9IeBS9nk",
  authDomain: "pawpalace-a8c7e.firebaseapp.com",
  projectId: "pawpalace-a8c7e",
  storageBucket: "pawpalace-a8c7e.firebasestorage.app",
  messagingSenderId: "787572099920",
  appId: "1:787572099920:web:457bdf9a8b200c058f3a55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app