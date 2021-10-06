import {
  collection,
  doc,
  documentId,
  getDoc,
  getDocs,
  query,
  where,
  writeBatch,
} from "@firebase/firestore";
import { createContext, useContext } from "react";
import db from "../services/getFirebase";

const productContext = createContext();

export const useProductContext = () => {
  return useContext(productContext);
};

export const ProductContext = ({ children }) => {
  const getProducts = async () => {
    const productsDb = await getDocs(collection(db, "items"));
    return createItemObject(productsDb);
  };

  const getProductsByCategory = async (category) => {
    const q = query(
      collection(db, "items"),
      where("categoryId", "==", category)
    );
    const productsDb = await getDocs(q);
    return createItemObject(productsDb);
  };

  const getProductById = async (id) => {
    const docRef = doc(db, "items", id);
    const product = await getDoc(docRef);
    if (product.exists()) {
      return createItemObject(product);
    } else {
      return undefined;
    }
  };

  const updateStock = async (cartList) => {
    const itemsToUpdateQuery = query(
      collection(db, "items"),
      where(
        documentId(),
        "in",
        cartList.map((i) => i.item.id)
      )
    );
    const itemsToUpdate = await getDocs(itemsToUpdateQuery);

    const batch = writeBatch(db);

    itemsToUpdate.docs.forEach((docSnapshot) => {
      batch.update(docSnapshot.ref, {
        stock:
          docSnapshot.data().stock -
          cartList.find((item) => item.item.id === docSnapshot.id).quantity,
      });
    });

    await batch.commit();
  };

  const createItemObject = (itemFromFirestore) => {
    if(itemFromFirestore.docs !== undefined){
      return itemFromFirestore.docs.map((product) => ({
        id: product.id,
        ...product.data(),
      }));
    }
    return { id: itemFromFirestore.id, ...itemFromFirestore.data() };
  }

  return (
    <productContext.Provider
      value={{
        getProducts,
        getProductsByCategory,
        getProductById,
        updateStock,
      }}
    >
      {children}
    </productContext.Provider>
  );
};
