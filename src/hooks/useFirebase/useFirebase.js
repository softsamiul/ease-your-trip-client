import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import firebaseInitApp from "../../shared/firebase/firebase.init";

firebaseInitApp();
const useFirebase = () => {
    const [isLoading, setIsloading] = useState(true);
    const [preloader, setPreloader] = useState(undefined);
    const [user, setUser] = useState({});

    const auth = getAuth();

    
    const signInUsingGoogle = () => {
        setIsloading(true)
        const googleProvider = new GoogleAuthProvider();

        return signInWithPopup(auth, googleProvider)
            
    }

    // get current user
    useState(()=>{
      const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
              // ...
            } else {
              // User is signed out
              // ...
            }
            setIsloading(false);
          });
        return () => unsubscribed;
    },[])

     // handling Log out 
     const logOut = () => {
      setIsloading(true)
      signOut(auth).then(() => {
          // Sign-out successful.
          setUser({})
      }).catch((error) => {
          // An error happened.
      }).finally(() => setIsloading(false))
    }

    return {
        signInUsingGoogle,
        user,
        logOut,
        isLoading,
        setIsloading,
        preloader,
        setPreloader
    }
}

export default useFirebase;