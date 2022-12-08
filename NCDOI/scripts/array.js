// Your web app's Firebase configuration

var inspectors = [];

var firebaseConfig = {
    apiKey: "AIzaSyA4UoQh1ErFeB23aUlww4pYCvliXIS6I60",
    authDomain: "inspector-locator-ef89c.firebaseapp.com",
    projectId: "inspector-locator-ef89c",
    storageBucket: "inspector-locator-ef89c.appspot.com",
    messagingSenderId: "253182318432",
    appId: "1:253182318432:web:cd18b909058d28e81ff005",
    measurementId: "G-16PTXW98PR"
    };

    // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

    // Initialize variables
const auth = firebase.auth()
const db = firebaseApp.firestore();

const inspectorCollection = db.collection("inspectors");

inspectorCollection.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        //console.log(doc.id, " => ", doc.data());
        var obj = {}
      obj['CEO ID'] = doc.data()["CEO ID"]
      obj['Trade'] = doc.data().Trade
        inspectors.push(obj);
        console.log(inspectors);
    });
});