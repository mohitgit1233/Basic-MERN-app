import React from "react";

import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCp20MnxyiXv6tG4WzNjTtRW755NOmhTb4",
  authDomain: "whelm-authentication.firebaseapp.com",
  projectId: "whelm-authentication",
  storageBucket: "whelm-authentication.appspot.com",
  messagingSenderId: "1015334896830",
  appId: "1:1015334896830:web:33b76d7a7859714ac2caef",
  measurementId: "G-XZ9C3NJDZ8"
}

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export {firebase}