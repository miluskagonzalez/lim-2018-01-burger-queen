import { initializeApp, firestore, auth } from 'firebase';

initializeApp({
  apiKey: "AIzaSyDGeSzE1z6KC36tSrM3-OzhNHzwDaauqMI",
  authDomain: "burger-queen-1510.firebaseapp.com",
  databaseURL: "https://burger-queen-1510.firebaseio.appappcom",
  projectId: "burger-queen-1510",
  storageBucket: "burger-queen-1510.appspot.com",
  messagingSenderId: "407705744875"
});

const Auth = auth();
const Database = firestore();
Database.settings({ timestampsInSnapshots: true });

export { Auth, Database };