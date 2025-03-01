import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAK-ZfjpId1mr0hZRV7IOoDZ7peq0wFdyM",
    authDomain: "errorscan3d.firebaseapp.com",
    projectId: "errorscan3d",
    storageBucket: "errorscan3d.firebasestorage.app",
    messagingSenderId: "38058785806",
    appId: "1:38058785806:web:c038fb103aacbbc711105f",
    measurementId: "G-J68VJZEQEP"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, getDocs };