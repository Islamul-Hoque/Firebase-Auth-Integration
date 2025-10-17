import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDHm2KFV3po2x0GOYsjU9Shn2nm-8vMiNE",
    authDomain: "fir-auth-integration-eb4b0.firebaseapp.com",
    projectId: "fir-auth-integration-eb4b0",
    storageBucket: "fir-auth-integration-eb4b0.firebasestorage.app",
    messagingSenderId: "847332530467",
    appId: "1:847332530467:web:3824d289ae502248a29496"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);