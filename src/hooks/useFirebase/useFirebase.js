import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import firebaseInitApp from "../../shared/firebase/firebase.init";

firebaseInitApp();
const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();

    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
        })
    }

    // get current user
    useState(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
              // ...
            } else {
              // User is signed out
              // ...
            }
          });
    },[])

    return {
        signInUsingGoogle,
        user
    }
}

export default useFirebase;