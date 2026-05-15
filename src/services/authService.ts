import {
  getAuth, 
  signInWithEmailAndPassword,
  signOut,
  type User,
  type UserCredential
} from "firebase/auth";

import app from "./firebaseConfig";

export const auth = getAuth(app);
/* Kirjautuminen */
export const loginWithEmail = async (
  email: string,
  password: string
): Promise<User> => {
  const result: UserCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  return result.user;
};


/* Kirjautuminen ulos */
export const logout = async (): Promise<void> => {
  await signOut(auth);
};