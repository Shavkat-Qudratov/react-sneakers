import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBtX3BgpKRYFn36bhA-ox1T4wqiuobsaPY",
  authDomain: "sneakers-8a8b6.firebaseapp.com",
  projectId: "sneakers-8a8b6",
  storageBucket: "sneakers-8a8b6.appspot.com",
  messagingSenderId: "921928206090",
  appId: "1:921928206090:web:c999509674d5907d4f9cf3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);