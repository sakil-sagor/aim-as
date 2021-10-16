import { useState, useEffect } from "react";
import firebaseAuthentication from "../Firebase/Firebase.inti"
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";




firebaseAuthentication();


const useFirebse = () => {
    const auth = getAuth();

    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    // google log in 
    const googleLogin = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)

    }

    // manual email password registration 
    const getEmail = event => {
        setEmail(event.target.value);
    }
    const getPassword = event => {
        setPassword(event.target.value);
    }
    const handelRegister = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
    }

    // manual log in 

    const handelLogin = (event) => {
        event.preventDefault();
        return signInWithEmailAndPassword(auth, email, password)



    }

    // toggole login or sign out button 

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)

            }
        });


    }, [])




    // sign out function 

    const handelLogout = () => {
        signOut(auth).then(() => {
            setUser({});
        });

    }








    return {
        error,
        user,
        setUser,
        setError,
        getEmail,
        getPassword,
        handelRegister,
        googleLogin,
        handelLogin,
        handelLogout,
    }


}
export default useFirebse;