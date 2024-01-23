import { boot } from "quasar/wrappers";

import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore"; // eslint-disable-line

const firebaseConfig = {
  apiKey: "AIzaSyBxiSzuGxr8csnVBmVSCPs1-BrMR3togbg",
  authDomain: "webfinal-309f1.firebaseapp.com",
  projectId: "webfinal-309f1",
  storageBucket: "webfinal-309f1.appspot.com",
  messagingSenderId: "1064129219755",
  appId: "1:1064129219755:web:f22389194d2c9e6d4bfbee",
  measurementId: "G-F45YB4YZ5G"
};


const fapp = initializeApp(firebaseConfig);

const db = getFirestore(fapp);

export default boot(async ({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$db = db;
  // ^ ^ ^ this will allow you to use this.$db (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$Firebaseapp = fapp;
  // ^ ^ ^ this will allow you to use this.$Firebaseapp (for Vue Options API form)
  //       so you can easily perform requests against your app's API
});
export { fapp };
