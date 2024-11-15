import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA3QJhYBxyoLOFRVofgzYbqn3hvq4ygn7Q",
  authDomain: "chatapp-1a83e.firebaseapp.com",
  projectId: "chatapp-1a83e",
  storageBucket: "chatapp-1a83e.firebasestorage.app",
  messagingSenderId: "248069840984",
  appId: "1:248069840984:web:bfb4113a5e774e1d35ea2d",
  measurementId: "G-4MKBQMGCXQ"
};

const app = initializeApp(firebaseConfig);

export default app