  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyByOH2RMMThxbW8liP_7nU2Yb6wONHdsgU",
    authDomain: "car-doctor-be686.firebaseapp.com",
    projectId: "car-doctor-be686",
    storageBucket: "car-doctor-be686.appspot.com",
    messagingSenderId: "18999976320",
    appId: "1:18999976320:web:03d126f5b6ec474622e165"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export default app;