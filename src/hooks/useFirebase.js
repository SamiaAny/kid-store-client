import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut } from "firebase/auth";
import { useEffect, useState } from 'react';
import firebaseAuth from "../Firebase/firebase.init";

firebaseAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading,setIsLoading] = useState(true);
    const [admin,setAdmin] = useState(false);

    const auth = getAuth();

    //user registration
    const registerUser = (name,email, password, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential.user);
                const newUser = {displayName: name,email: email}
                setUser(newUser);
                setError('');
                saveUserToDb(name,email);
                updateProfile(auth.currentUser, {
                    displayName: name
                  }).then(() => {
                
                  }).catch((error) => {
                    // An error occurred
                    // ...
                  });
                history.replace('/'); 
            })
            .catch((error) => {
                console.log(error.message);
                setError(error.message);
            })
            .finally(() => setIsLoading(false))
    };


    //user login
    const userLogin = (email, password, history, location) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                console.log(userCredential.user);
                setError('');
                const uri = location?.state?.from || '/';
                history.push(uri);
                // ...
            })
            .catch((error) => {
                console.log(error.message);
                setError(error.message);
            })
            .finally(() => setIsLoading(false))
    };

    //set Observer state change
    useEffect(() => {
        const unsubsceibed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                // User is signed out
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubsceibed;
    }, []);

    useEffect(()=>{
        fetch(`https://nameless-basin-78356.herokuapp.com/users/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setAdmin(data.admin);
        })
    },[user?.email]);

    //save user to db
    const saveUserToDb = (displayName,email) => {
        const user = {displayName, email};
        fetch('https://nameless-basin-78356.herokuapp.com/users/',{
            method:'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(user)
        }).then()
    }



    //logout
    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({});
        }).catch((error) => {
            // An error happened.
        }).finally(() => setIsLoading(false))
    };

    return {
        user,
        error,
        isLoading,
        admin,
        registerUser,
        userLogin,
        logOut
    }

}

export default useFirebase;