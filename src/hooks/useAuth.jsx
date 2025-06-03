import { useEffect, useState } from "react";
import { auth } from "../services";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  setPersistence,
  signInWithEmailAndPassword,
  signOut,
  browserLocalPersistence, //persiste en localStorage
  inMemoryPersistence, //persiste hasta que recargo la pagina
  browserSessionPersistence, //persiste solo si se mantiene el navegador
} from "firebase/auth";

setPersistence(auth, browserLocalPersistence);

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      },
      (error) => setLoading(false)
    );

    return () => unsubscribe();
  }, []);

  const signup = async (email, password) => {
    try {
      const userCreated = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      return userCreated;
    } catch (error) {
      throw new Error(error);
    }
  };

  const login = async (email, password) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      return user;
    } catch (error) {
      throw new Error(error);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      throw error;
    }
  };

  return { signup, login, logout, user, loading };
};