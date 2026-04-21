import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut as firebaseSignOut,
} from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "./firebase";

const ALLOWED_DOMAIN = "edlight.org";
const provider = new GoogleAuthProvider();

export async function signInWithGoogle() {
  const result = await signInWithPopup(auth, provider);
  const user = result.user;
  const email = user.email ?? "";

  if (!email.endsWith(`@${ALLOWED_DOMAIN}`)) {
    await firebaseSignOut(auth);
    throw new Error(`Access restricted to @${ALLOWED_DOMAIN} accounts only.`);
  }

  // Upsert user profile in Firestore
  await setDoc(
    doc(db, "users", user.uid),
    {
      id: user.uid,
      name: user.displayName ?? "",
      email: user.email ?? "",
      profileImage: user.photoURL ?? "",
      role: "employee",
      status: "active",
      lastLoginAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    },
    { merge: true }
  );

  return user;
}

export async function signOut() {
  await firebaseSignOut(auth);
}
