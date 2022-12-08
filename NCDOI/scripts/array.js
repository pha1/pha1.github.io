// Your web app's Firebase configuration

var inspectors = [];

var firebaseConfig = {
    apiKey: "AIzaSyAoNHpW6B3UNJ0KV8DXKhoMSdOJ3m4bkNY",
    authDomain: "inspectorlocator.firebaseapp.com",
    projectId: "inspectorlocator",
    storageBucket: "inspectorlocator.appspot.com",
    messagingSenderId: "373749984697",
    appId: "1:373749984697:web:3a894f81fc10e3bd4bda68",
    measurementId: "G-GE2S58262L"
    };

    // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

    // Initialize variables
const auth = firebase.auth()
const db = firebaseApp.firestore();

const inspectorCollection = db.collection("inspectors");

inspectorCollection.get("00Gisau75CRdpkl7EFC5").then((doc) => {
    if (doc.exists) {
        console.log("Document data: " + doc.data);
        var obj = {}
        obj['CEO ID'] = doc.data().ceoId
        obj['Trade'] = doc.data().trade
        inspectors.push(obj);
    } else {
        console.log("Document doesn't exist");
    }
});

/*
inspectorCollection.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        //console.log(doc.id, " => ", doc.data());
        var obj = {}
      obj['CEO ID'] = doc.data().ceoId
      obj['Trade'] = doc.data().trade
        inspectors.push(obj);
        console.log(inspectors);
    });
});
*/