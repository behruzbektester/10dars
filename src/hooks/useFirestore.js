import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import { useEffect, useReducer, useState } from "react";
import toast from "react-hot-toast";

const initialState = {
    data: null,
    error: null,
    isPending: false,
    success: true,
};

const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case "IS_PENDING":
            return { data: null, error: null, isPending: true, success: true };
        case "ERROR":
            return { data: null, error: payload, isPending: false, success: false };
        case "ADD_DATA":
            return { data: payload, error: null, isPending: false, success: true };
        default:
            return state;
    }
};

export function useFirestore(c) {
    const [isCancelled, setIsCancelled] = useState(false);
    const [state, dispatch] = useReducer(reducer, initialState);

    const isNotCancelled = (action) => {
        if (!isCancelled) {
            dispatch(action);
        }
    };

    const addDocument = async(data) => {
        isNotCancelled({
            type: "IS_PENDING",
            payload: true,
        });

        try {
            await addDoc(collection(db, c), data);
        } catch (error) {
            console.log(error.message);
            toast.error(error.message);
            isNotCancelled({
                type: "ERROR",
                payload: error.message,
            });
        } finally {
            isNotCancelled({
                type: "IS_PENDING",
                payload: false,
            });
        }
    };

    useEffect(() => {
        return () => {
            setIsCancelled(true);
        };
    }, []);

    return { addDocument };
}