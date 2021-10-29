import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import firebaseInitApp from "../../shared/firebase/firebase.init";

firebaseInitApp();
const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();

    
    const signInUsingGoogle = () => {
        
        const googleProvider = new GoogleAuthProvider();

        return signInWithPopup(auth, googleProvider)
            
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

     // handling Log out 
     const logOut = () => {
      signOut(auth).then(() => {
          // Sign-out successful.
          setUser({})
      }).catch((error) => {
          // An error happened.
      })
    }

    return {
        signInUsingGoogle,
        user,
        logOut
    }
}

export default useFirebase;