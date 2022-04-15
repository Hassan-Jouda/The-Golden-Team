import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB1FARhk7JWmsoGxhWWRgaXwleDlDVHGd0",
  authDomain: "swifthouse-f8b2f.firebaseapp.com",
  projectId: "swifthouse-f8b2f",
  storageBucket: "swifthouse-f8b2f.appspot.com",
  messagingSenderId: "1092925553191",
  appId: "1:1092925553191:web:323c64919977ba7833ac02",
  measurementId: "G-W7G93GTTYB",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
