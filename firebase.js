import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyANB6uR3EsihYnnsW9vFsluvjObmS4q940",
    authDomain: "gres-app-c5c16.firebaseapp.com",
    databaseURL: "https://gres-app-c5c16.firebaseio.com",
    projectId: "gres-app-c5c16",
    storageBucket: "gres-app-c5c16.appspot.com",
    messagingSenderId: "208735901566",
    appId: "1:208735901566:web:35774434de5e5c09bc052f",
    measurementId: "G-LJ0REYXV5D",
}

let instance = null;

export default function getFirebase() {
  if (typeof window !== 'undefined') {
    if (instance) return instance;
    instance = firebase.initializeApp(config);
    return instance;
  }

  return null;
}