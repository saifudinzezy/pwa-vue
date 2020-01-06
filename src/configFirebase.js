import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/messaging';

const config = {
    // apiKey: '<Your api key here>',
    // authDomain: '<Your auth Domain here>',
    // databaseURL: '<Your databaseUrl here>',
    // projectId: '<Your projectId here>',
    // storageBucket: '<Your storageBucket here>',
    // messagingSenderId: '<Your messagingSenderId here>'

    apiKey: "AIzaSyDEsT67BVNPOJ2trxpEglfx0SYBZ1KJiKo",
    authDomain: "cropchien-6da7c.firebaseapp.com",
    databaseURL: "https://cropchien-6da7c.firebaseio.com",
    projectId: "cropchien-6da7c",
    storageBucket: "cropchien-6da7c.appspot.com",
    messagingSenderId: "879494275217",
    appId: "1:879494275217:web:dda1e46482b8b3da79df30",
    measurementId: "G-E3MQ22N7YW"
}

firebase.initializeApp(config)

// Initialize Cloud Firestore through Firebase
let db = firebase.firestore();

// Disable deprecated features
db.settings({
    timestampsInSnapshots: true
});

export default {
    db
}