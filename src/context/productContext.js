import { createContext, useContext } from "react";
import { collection, doc, getDocs, getDoc, query, where } from "@firebase/firestore";
import db from "../services/getFirebase";

const productContext = createContext();

export const useProductContext = () => {
  return useContext(productContext);
};

export const ProductContext = ({ children }) => {
  const getProducts = async () => {
    const productsDb = await getDocs(collection(db, "items"));
    return productsDb.docs.map((product) => ({
      id: product.id,
      ...product.data(),
    }));
  };

  const getProductsByCategory = async (category) => {
    const q = query(
      collection(db, "items"),
      where("categoryId", "==", category)
    );
    const productsDb = await getDocs(q);
    return productsDb.docs.map((product) => ({
      id: product.id,
      ...product.data(),
    }));
  };

  const getProductById = async (id) => {
    const docRef = doc(db, "items", id);
    const product = await getDoc(docRef);
    if (product.exists()) {
      return { id: product.id, ...product.data() };
    } else {
      return undefined;
    }
  };

  return (
    <productContext.Provider
      value={{
        getProducts,
        getProductsByCategory,
        getProductById,
      }}
    >
      {children}
    </productContext.Provider>
  );
};
