<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA4UoQh1ErFeB23aUlww4pYCvliXIS6I60",
    authDomain: "inspector-locator-ef89c.firebaseapp.com",
    projectId: "inspector-locator-ef89c",
    storageBucket: "inspector-locator-ef89c.appspot.com",
    messagingSenderId: "253182318432",
    appId: "1:253182318432:web:cd18b909058d28e81ff005",
    measurementId: "G-16PTXW98PR"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>