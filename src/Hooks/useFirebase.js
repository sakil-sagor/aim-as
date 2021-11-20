import { useState, useEffect } from "react";
import firebaseAuthentication from "../Firebase/Firebase.inti"
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { useHistory } from "react-router-dom";




firebaseAuthentication();


const useFirebse = () => {
    const auth = getAuth();

    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);


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

    const handelRegister = () => {
        return createUserWithEmailAndPassword(auth, email, password)

    }

    // manual log in 


    const handelLogin = () => {

        console.log(email, password);
        return signInWithEmailAndPassword(auth, email, password)

    }



    // toggole login or sign out button 

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)

            }
            setIsLoading(false)
        });
    }, [])

    // sign out function 

    // const history = useHistory();

    const handelLogout = () => {
        signOut(auth)
            .then(() => {
                setUser({})
                // history.push('./home')
            })
            .finally(() => setIsLoading(false));

    }

    return {
        email,
        password,
        error,
        user,
        isLoading,
        setIsLoading,

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