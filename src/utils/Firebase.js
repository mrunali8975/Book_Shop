import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCilR6pNetn2OZ1-I8EWv9zT0KUwFQWCos',
  authDomain: 'databaseproject-b4e01.firebaseapp.com',
  databaseURL:
    'https://console.firebase.google.com/project/databaseproject-b4e01/database/databaseproject-b4e01-default-rtdb/data/~2F',
  projectId: 'databaseproject-b4e01',
  storageBucket: 'databaseproject-b4e01.appspot.com',
  messagingSenderId: '398554013566',
  appId: '1:398554013566:android:8d2e518cd4dc5baa905d2f',
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
firebase.firestore();
export default firebaseConfig;
