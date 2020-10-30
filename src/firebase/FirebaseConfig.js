import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDi3Y88NnnbsCqXCY_K5jwszPk547QwIZg",
  authDomain: "cpoint-6646f.firebaseapp.com",
  databaseURL: "https://cpoint-6646f.firebaseio.com",
  projectId: "cpoint-6646f",
  storageBucket: "cpoint-6646f.appspot.com",
  messagingSenderId: "230563373767",
  appId: "1:230563373767:web:427a1d8b4a8ca3191614e2",
  measurementId: "G-09PC949W3K"
};

firebase.initializeApp(firebaseConfig);

export default firebase;