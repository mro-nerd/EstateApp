
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBSE_API_KEY,
  authDomain: "estate-6b6d6.firebaseapp.com",
  projectId: "estate-6b6d6",
  storageBucket: "estate-6b6d6.appspot.com",
  messagingSenderId: "3455866242",
  appId: "1:3455866242:web:67f6562b11775d45402b9b",
  measurementId: "G-9HMBYXF1GD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);