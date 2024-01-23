import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBxiSzuGxr8csnVBmVSCPs1-BrMR3togbg",
  authDomain: "webfinal-309f1.firebaseapp.com",
  projectId: "webfinal-309f1",
  storageBucket: "webfinal-309f1.appspot.com",
  messagingSenderId: "1064129219755",
  appId: "1:1064129219755:web:f22389194d2c9e6d4bfbee",
  measurementId: "G-F45YB4YZ5G"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);