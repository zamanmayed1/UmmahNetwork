import firebase from "firebase/app"
import "firebase/auth"

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyAbFCsuOhpy-PMehTzbpkY5c64hDM1YYlY",
    authDomain: "ummahnetwork-28722.firebaseapp.com",
    projectId: "ummahnetwork-28722",
    storageBucket: "ummahnetwork-28722.appspot.com",
    messagingSenderId: "685099364504",
    appId: "1:685099364504:web:b113ea1f52b91ab34720ed"
}).auth();