import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"

const firebaseApp = initializeApp({
    apiKey: "AIzaSyDNG3klCHxHlUoWeAa9UhWRwEK6Xlp5Fr8",
    authDomain: "facebook-clone-63885.firebaseapp.com",
    projectId: "facebook-clone-63885",
    storageBucket: "facebook-clone-63885.appspot.com",
    messagingSenderId: "847623258478",
    appId: "1:847623258478:web:cc7cf57ce23ea0fe3fc17f",
    measurementId: "G-Z70GD0EZ7Q"
});
export const db = getFirestore(firebaseApp);