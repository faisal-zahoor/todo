import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAs9XAT0MCA43koJs-wBSBRFWne8Y-hYyw",
  authDomain: "todo-fasi.firebaseapp.com",
  projectId: "todo-fasi",
  storageBucket: "todo-fasi.appspot.com",
  messagingSenderId: "253176213564",
  appId: "1:253176213564:web:b9d0c52a5892fca2545339",
  measurementId: "G-1BZJR7B74Q",
};

const app = initializeApp(firebaseConfig);

export default app;
