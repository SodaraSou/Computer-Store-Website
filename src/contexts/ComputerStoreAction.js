import { db } from "../firebase.config";
import {
  collection,
  getDocs,
  getDoc,
  query,
  where,
  doc,
} from "firebase/firestore";

export const createAccount = () => {};
export const getProfile = () => {};
export const getProduct = async (productType, productId) => {
  try {
    const docRef = doc(db, productType, productId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      return docSnap.data();
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.log(error);
  }
};
export const getAllProduct = async () => {
  try {
    const docRef = collection(db, "laptop");
    // const q = query(docRef, where("brand", "==", "Apple"));
    const docSnap = await getDocs(docRef);
    const listing = [];
    docSnap.forEach((doc) => {
      listing.push({
        id: doc.id,
        data: doc.data(),
      });
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
