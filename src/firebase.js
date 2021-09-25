import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAXsUg_t82fd4u7Q7qOLBd-N7vtj-V-4ME",
    authDomain: "the-night-sky-aaccd.firebaseapp.com",
    projectId: "the-night-sky-aaccd",
    storageBucket: "the-night-sky-aaccd.appspot.com",
    messagingSenderId: "1000311839403",
    appId: "1:1000311839403:web:90088b2699f6d3727f75ee",
    measurementId: "G-4PN4MVQS3W"
};

const fire = firebase.initializeApp(firebaseConfig)

export default fire;