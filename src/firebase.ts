import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYk999da9dGgJyffole0rVHT7O-pHxRSg",
  authDomain: "chatbot-d3989.firebaseapp.com",
  projectId: "chatbot-d3989",
  storageBucket: "chatbot-d3989.firebasestorage.app",
  messagingSenderId: "748873824791",
  appId: "1:748873824791:web:61cb26ac7f97bf77f8fa52",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
