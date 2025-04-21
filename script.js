
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyABjii5nZAh_87AVhF7AKznkaGd96bFOaQ",
    authDomain: "login-form-2f5d1.firebaseapp.com",
    projectId: "login-form-2f5d1",
    storageBucket: "login-form-2f5d1.firebasestorage.app",
    messagingSenderId: "931217419045",
    appId: "1:931217419045:web:d3999d8e588a91c26f08cc",
    measurementId: "G-L88LXGZ6FH"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
