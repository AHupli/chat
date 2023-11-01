import { initializeApp } from "firebase/app";
import { getFirestore,collection,addDoc,serverTimestamp, orderBy } from 'firebase/firestore';


const firebaseConfig = {

  apiKey: "AIzaSyCVMKcdBsteXNOpdtmHxJ9kpZATlSlGr00",

  authDomain: "chat-8fd06.firebaseapp.com",

  projectId: "chat-8fd06",

  storageBucket: "chat-8fd06.appspot.com",

  messagingSenderId: "691805715452",

  appId: "1:691805715452:web:c0f793fdfea9a08018d079"

};


// Initialize Firebase

initializeApp(firebaseConfig);

const firestore = getFirestore();

const MESSAGES = 'messages';

export {
    firestore,
    collection,
    addDoc,
    serverTimestamp,
    orderBy,
    MESSAGES
};