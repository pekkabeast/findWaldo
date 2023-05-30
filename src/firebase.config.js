import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const config = {
  apiKey: "AIzaSyCk4K4Bq5vm7TFW-kscBcWu6spcky2t7jk",
  authDomain: "findwaldo-bceb0.firebaseapp.com",
  projectId: "findwaldo-bceb0",
  storageBucket: "findwaldo-bceb0.appspot.com",
  messagingSenderId: "420906037443",
  appId: "1:420906037443:web:0961f59b7e27de128e7276",
};

const app = initializeApp(config);
export const firestore = getFirestore(app);
