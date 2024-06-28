import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
//  apiKey: "AIzaSyC2leLNiRwlm1a6Gqc6rp-yTy2fJDjL_Q8",
//  authDomain: "tugas-5847a.firebaseapp.com",
//  projectId: "tugas-5847a",
//  storageBucket: "tugas-5847a.appspot.com",
//  messagingSenderId: "1094080058486",
//  appId: "1:1094080058486:web:0b2d924325695a787abb57"
  apiKey: "AIzaSyCS5L29NeQHwBS0Tby2V6UQy2DYugDYKNQ",
  authDomain: "rn-test-a1624.firebaseapp.com",
  projectId: "rn-test-a1624",
  storageBucket: "rn-test-a1624.appspot.com",
  messagingSenderId: "856895172990",
  appId: "1:856895172990:web:aa2ae0e6dd8d25c861432f",
  measurementId: "G-NLJ2ZQ7F38"

};

const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);
export { db };
