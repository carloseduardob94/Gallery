import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAjP8o_togXnSyDV1Kwn73Qzi0iQKcGmYE",
  authDomain: "d5reactgallery-8124c.firebaseapp.com",
  projectId: "d5reactgallery-8124c",
  storageBucket: "d5reactgallery-8124c.appspot.com",
  messagingSenderId: "335758973108",
  appId: "1:335758973108:web:af44ec5611e8ea4d231fe1"
};

const firebaseApp = initializeApp(firebaseConfig)

export const storage = getStorage(firebaseApp)