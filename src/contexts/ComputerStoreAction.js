import { auth, dbFirestore } from "../firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
// Create Account Method
export const createAccount = async (inputData) => {
  const { email, password } = inputData;
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    await setDoc(doc(dbFirestore, "users", user.uid), inputData);
    return true;
  } catch (error) {
    console.log(error);
    toast.error("Something Went Wrong With Registration");
  }
};
// Login Method
export const userLogin = async (inputData) => {
  const { email, password } = inputData;
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return true;
  } catch (error) {
    console.log(error);
    toast.error("Bad User Credential");
  }
};
// Logout Method
export const userLogout = () => {
  try {
    signOut(auth);
    return true;
  } catch (error) {
    console.log(error);
  }
};
// Get User Profile Method
export const getProfile = async (userId) => {
  console.log(userId);
  try {
    const docRef = doc(dbFirestore, "users", userId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log("no");
    }
  } catch (error) {
    console.log(error);
    toast.error("Something Went Wrong!");
  }
};
export const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    toast.success("Successful Send");
  } catch (error) {
    console.log(error);
    toast.error("Could not send password reset link");
  }
};
export const faceBookAuth = async () => {
  const fbAuthProvider = new FacebookAuthProvider();
  try {
   await signInWithPopup(auth, fbAuthProvider);
  return true;
  } catch (error) {
    console.log(error);
    toast.error('Error')
  }
};
export const getProduct = () => {};
export const getAllProduct = () => {};
export const searchProduct = () => {};
export const getByBrand = () => {};
export const getByCategory = () => {};
export const sortByPrice = () => {};
export const sortByOffer = () => {};
export const sortByName = () => {};

export const addToCart = () => {};
export const getUserCart = () => {};
export const checkout = () => {};
