import { initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDIm-O9bl2LDXZsl_BWdYz9WuU21wj1x8U",
  authDomain: "aicyroweb.firebaseapp.com",
  projectId: "aicyroweb",
  storageBucket: "aicyroweb.firebasestorage.app",
  messagingSenderId: "569305223674",
  appId: "1:569305223674:web:bfede06a801bdedd521443",
  measurementId: "G-9WJ0DRK31T",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const database = getDatabase(app);

export { app, database };

