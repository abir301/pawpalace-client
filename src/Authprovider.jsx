import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, updateProfile, signInWithPopup, GoogleAuthProvider , GithubAuthProvider  } from "firebase/auth";
import app from "./firebase.init";

export let authContext = createContext()

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const AuthProvider = ({ children }) => {
    let [user, setUser] = useState(null)
    let [loader, setLoader] = useState(true)
    let newUser = (name, email, password, photo) => {
        return createUserWithEmailAndPassword(auth, name, email, password, photo)

    }

    let login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    let changeProfile = (data) => {
        return updateProfile(auth.currentUser, data)
    }

    let logOut = () => {
        return signOut(auth)
    }

    let signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    let signInWithGithub = () => {
        return signInWithPopup(auth, githubProvider);
    }


    let authInfo = { user, setUser, newUser, logOut, login, loader, changeProfile, signInWithGoogle , signInWithGithub }


    useEffect(() => {
        let remove = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoader(false)
        })
        return () => { remove() }
    }, [])

    return (
        <authContext.Provider value={authInfo}>{children}</authContext.Provider>
    );
};

export default AuthProvider;