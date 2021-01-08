import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const FB_CONFIG = {
  apiKey: "AIzaSyAMAhW4h3zctB9TG2FNcQQicCcHCyIsCXM",
  authDomain: "ecommerce-react-cf871.firebaseapp.com",
  projectId: "ecommerce-react-cf871",
  storageBucket: "ecommerce-react-cf871.appspot.com",
  messagingSenderId: "11377146732",
  appId: "1:11377146732:web:6a86a40e89d6e22c7ed149"
};

firebase.initializeApp(FB_CONFIG);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
