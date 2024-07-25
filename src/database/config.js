import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDs6OOk_GeUJfvJ0d_illtBJj1c1DoYKRc",
    authDomain: "todo-9237e.firebaseapp.com",
    projectId: "todo-9237e",
    storageBucket: "todo-9237e.appspot.com",
    messagingSenderId: "905475915188",
    appId: "1:905475915188:web:96dc098cdecf4396b986e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);