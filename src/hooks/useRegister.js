import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/config";
import { useFirestore } from "./useFirestore";

import { login } from "../app/features/userSlice";
import { useDispatch } from "react-redux";

export const useRegister = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { addUser } = useFireStore("users");

  const register = async (email, password, displayName) => {
    setIsPending(true);
    try {
      const req = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName,
        photoURL:
          "https://api.dicebear.com/9.x/croodles/svg?seed=Destiny" +
          displayName,
      });
      const user = req.user;
      dispatch(login(user));
      addUser(
        {
          displayName: user.displayName,
          email: user.email,
          isOnline: true,
          photoURL: user.photoURL,
        },
        "users"
      );
      setUser(user);
    } catch {
    } finally {
      setIsPending(false);
    }
  };

  return { user, isPending, register };
};
