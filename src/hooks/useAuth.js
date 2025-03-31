import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../firebase/config";
import { login, logOut, authReady } from "../app/features/userSlice";
import {
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";

export const useAuth = () => {
    const dispatch = useDispatch();

    // Listen for auth state changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(login({ uid: user.uid, email: user.email }));
            } else {
                dispatch(logOut());
            }
            dispatch(authReady());
        });

        return () => unsubscribe();
    }, [dispatch]);

    // Login function
    const signIn = async(email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.error("Login failed:", error.message);
        }
    };

    // Logout function
    const signOutUser = async() => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error("Logout failed:", error.message);
        }
    };

    return { signIn, signOutUser };
};