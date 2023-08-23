import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const auth = getAuth(app);

    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);


    const singUp = (email, password) => {
        console.log(email, password);
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (name, image) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        });
    }

    const singIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false);
            setUser(currentUser);
            if (currentUser) {
                const loggedUser = {email: currentUser.email}
                axios.post('http://localhost:5000/jwt', {
                    loggedUser
                })
                    .then((res) => {
                        console.log(res.data.token);
                        localStorage.setItem('access-token', res.data.token)
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            }
            else{
                localStorage.removeItem('access-token');
            }
        })

        return () => {
            unsubscribe();
        }
    }, [auth])


    const authInfo = {
        loading,
        user,
        singUp,
        singIn,
        updateUser,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;