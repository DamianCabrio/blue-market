import { addDoc, collection } from "@firebase/firestore";
import { createContext, useContext, useState } from "react";
import db from "../services/getFirebase";
import { useProductContext } from "./productContext";

const cartContext = createContext();

export const useCartContext = () => {
  return useContext(cartContext);
};

export const CartContext = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const [cartTotals, setCartTotals] = useState({});
  const [lastOrder, setLastOrder] = useState({});
  const { updateStock } = useProductContext();

  function manageItemInCart(item, quantity, isAdd) {
    let newCartList;
    if (isInCart(item.id)) {
      newCartList = [...cartList];
      const itemIndex = findItemIndex(item.id);
      let itemInArray = newCartList[itemIndex];
      if (isAdd) {
        const indexItemAlreadyInCart = findItemIndex(item.id);
        if (
          indexItemAlreadyInCart === -1 ||
          cartList[indexItemAlreadyInCart].quantity + quantity <= item.stock
        ) {
          itemInArray.quantity += quantity;
        } else {
          return false;
        }
      } else if (!isAdd && itemInArray.quantity - quantity > 0) {
        itemInArray.quantity -= quantity;
      } else {
        return false;
      }
      newCartList[itemIndex] = itemInArray;
      setCartList(newCartList);
    } else {
      if (isAdd) {
        newCartList = [{ item: item, quantity: quantity }, ...cartList];
        setCartList(newCartList);
      } else {
        return false;
      }
    }
    itemTotals(newCartList);
    return true;
  }

  function addItem(item, quantity) {
    return manageItemInCart(item, quantity, true);
  }

  function subtractItem(item, quantity) {
    return manageItemInCart(item, quantity, false);
  }

  function findItemIndex(itemId) {
    return cartList.findIndex((tempItem) => tempItem.item.id === itemId);
  }

  function removeItem(itemId) {
    if (!isInCart(itemId)) {
      return false;
    }
    const newCartList = [...cartList].filter(
      (tempItem) => tempItem.item.id !== itemId
    );
    setCartList(newCartList);
    itemTotals(newCartList);
  }

  function clear() {
    setCartList([]);
    itemTotals([]);
  }

  function itemTotals(newCartList) {
    const amount = newCartList.reduce((prev, cur) => prev + cur.quantity, 0);
    const totalPrice = newCartList.reduce(
      (prev, cur) => prev + cur.item.price * cur.quantity,
      0
    );
    setCartTotals({ amount: amount, total: totalPrice.toFixed(2) });
  }

  function isInCart(itemId) {
    return cartList.some((tempItem) => tempItem.item.id === itemId);
  }

  const saveOrder = async (order) => {
    const docRef = await addDoc(collection(db, "orders"), {
      order,
    });
    if (docRef.id !== undefined) {
      await updateStock(cartList);
      clear();
      setLastOrder(docRef);
      return true;
    } else {
      return false;
    }
  };

  return (
    <cartContext.Provider
      value={{
        addItem,
        removeItem,
        clear,
        isInCart,
        subtractItem,
        saveOrder,
        cartTotals,
        cartList,
        lastOrder,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
