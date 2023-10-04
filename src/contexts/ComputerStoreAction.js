import { db } from "../firebase.config";
import { collection, getDocs, query, where } from "firebase/firestore";

export const createAccount = () => {};
export const getProfile = () => {};
export const getProduct = () => {};
export const getAllProduct = async () => {
  try {
    const docRef = collection(db, "laptop");
    // const q = query(docRef, where("brand", "==", "Apple"));
    const docSnap = await getDocs(docRef);
    const listing = [];
    docSnap.forEach((doc) => {
      listing.push(doc.data());
    });
    return listing;
  } catch (error) {
    console.log(error);
  }
};
export const searchProduct = () => {};
export const getByBrand = () => {};
export const getByCategory = () => {};
export const sortByPrice = () => {};
export const sortByOffer = () => {};
export const sortByName = () => {};

export const addToCart = () => {};
export const getUserCart = () => {};
export const checkout = () => {};
