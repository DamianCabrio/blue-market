import { useState, createContext, useContext } from "react";

const cartContext = createContext(); //crear una sola vez

export const useCartContext = () => {
  return useContext(cartContext);
};

export const CartContext = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  function addItem(item, quantity) {
    if (isInCart(item.id)) {
      let newCartList = [...cartList];
      const itemIndex = newCartList.findIndex(
        (tempItem) => tempItem.item.id === item.id
      );
      let itemInArray = newCartList[itemIndex];
      itemInArray.quantity += quantity;
      newCartList[itemIndex] = itemInArray;
      setCartList(newCartList);
    } else {
      setCartList([{ item: item, quantity: quantity }, ...cartList]);
    }
  }

  function removeItem(itemId) {
    if (!isInCart(itemId)) {
      return false;
    }
    const newCartList = [...cartList].filter(
      (tempItem) => tempItem.item.id !== itemId
    );
    setCartList(newCartList);
  }

  function clear() {
    setCartList([]);
  }

  function isInCart(itemId) {
    return cartList.some((tempItem) => tempItem.item.id === itemId);
  }

  console.log(cartList);
  return (
    <cartContext.Provider
      value={{
        addItem,
        removeItem,
        clear,
        isInCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
