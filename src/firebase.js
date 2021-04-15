import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyAXlv4P9dXdScc5g4U0ztptGSCuOSlmasc",
    authDomain: "beats-auth-development.firebaseapp.com",
    projectId: "beats-auth-development",
    storageBucket: "beats-auth-development.appspot.com",
    messagingSenderId: "905062192007",
    appId: "1:905062192007:web:a950abcda839f8f4f97922"
})
export const auth = app.auth()
export default app


