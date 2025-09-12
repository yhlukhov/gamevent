// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'gam-events.firebaseapp.com',
  projectId: 'gam-events',
  storageBucket: 'gam-events.firebasestorage.app',
  messagingSenderId: '614294256154',
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

// Initialize Firebase app
const app = initializeApp(firebaseConfig)

// Initialize Firestore database
const db = getFirestore(app)

export {db}