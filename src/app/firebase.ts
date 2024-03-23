// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcSPCdIN8id4eWC_y6frMEHe7kgCVwtQs",
  authDomain: "electricart-dd265.firebaseapp.com",
  projectId: "electricart-dd265",
  storageBucket: "electricart-dd265.appspot.com",
  messagingSenderId: "444310540861",
  appId: "1:444310540861:web:b2179172da3f5e9c735054"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth  = getAuth()
