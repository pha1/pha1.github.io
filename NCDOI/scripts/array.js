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

/*
// Tested one document to object and added it into array -> Works
inspectorCollection.doc("00Gisau75CRdpkl7EFC5").get().then((doc) => {
    inspectors = [];
    if (doc.exists) {
        var obj = {}
        obj['CEO ID'] = doc.data().ceoId
        obj['First Name'] = doc.data().firstName
        obj['Last Name'] = doc.data().lastName
        obj['Cert No'] = doc.data().certNo
        obj['Type'] = doc.data().type
        obj['Trade'] = doc.data().trade
        obj['Level'] = doc.data().level
        obj['Exp Date'] = doc.data().expDate
        obj['Employer'] = doc.data().employer
        obj['Emp Phone'] = doc.data().empPhone
        obj['County'] = doc.data().county
        obj['Address'] = doc.data().address
        obj['City'] = doc.data().city
        obj['State'] = doc.data().state
        obj['Zip Code'] = doc.data().zipCode
        obj['Primary contact email'] = doc.data().primaryContactEmail
        inspectors.push(obj);
        console.log(inspectors);
    } else {
        console.log("Document doesn't exist");
    }
});
*/

/*
inspectorCollection.get().then((querySnapshot) => {
    inspectors = [];
    querySnapshot.forEach((doc) => {
        //console.log(doc.id, " => ", doc.data());
        var obj = {}
        obj['CEO ID'] = doc.data().ceoId
        obj['First Name'] = doc.data().firstName
        obj['Last Name'] = doc.data().lastName
        obj['Cert No'] = doc.data().certNo
        obj['Type'] = doc.data().type
        obj['Trade'] = doc.data().trade
        obj['Level'] = doc.data().level
        obj['Exp Date'] = doc.data().expDate
        obj['Employer'] = doc.data().employer
        obj['Emp Phone'] = doc.data().empPhone
        obj['County'] = doc.data().county
        obj['Address'] = doc.data().address
        obj['City'] = doc.data().city
        obj['State'] = doc.data().state
        obj['Zip Code'] = doc.data().zipCode
        obj['Primary contact email'] = doc.data().primaryContactEmail
        inspectors.push(obj);
        console.log(inspectors);
    });
});
*/