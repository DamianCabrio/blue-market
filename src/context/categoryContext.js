import { createContext, useContext } from "react";
import {
  collection,
  getDocs,
} from "@firebase/firestore";
import db from "../services/getFirebase";

const categoryContext = createContext();

export const useCategoryContext = () => {
  return useContext(categoryContext);
};

export const CategoriesContext = ({ children }) => {
  const getCategories = async () => {
    const categoriesDb = await getDocs(collection(db, "category"));
    return categoriesDb.docs.map((category) => ({
      docId: category.id,
      ...category.data(),
    }));
  };

  return (
    <categoryContext.Provider
      value={{
        getCategories,
      }}
    >
      {children}
    </categoryContext.Provider>
  );
};
