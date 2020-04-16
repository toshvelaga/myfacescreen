// tutorial: https://www.youtube.com/watch?v=gf5bVfVlNUM&list=PL4cUxeGkcC9iWstfXntcj8f-dFZ4UtlN3&index=17

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBQJqufSpPBuCO6HyRBKIztOJ2ThY-aOmI",
    authDomain: "facemask-1fb1c.firebaseapp.com",
    databaseURL: "https://facemask-1fb1c.firebaseio.com",
    projectId: "facemask-1fb1c",
    storageBucket: "facemask-1fb1c.appspot.com",
    messagingSenderId: "680672629062",
    appId: "1:680672629062:web:004dc8e19183676ad1d547",
    measurementId: "G-4BW967YQLW"
  };

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true})

export default firebase;