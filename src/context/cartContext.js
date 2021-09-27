import { useState, createContext, useContext } from "react";

const cartContext = createContext();

export const useCartContext = () => {
  return useContext(cartContext);
};

export const CartContext = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const [cartTotals, setCartTotals] = useState({});
  console.log(cartList);
  console.log(cartTotals);

  function addItem(item, quantity) {
    let newCartList;
    if (isInCart(item.id)) {
      newCartList = [...cartList];
      const itemIndex = findItemIndex(item.id);
      let itemInArray = newCartList[itemIndex];
      itemInArray.quantity += quantity;
      newCartList[itemIndex] = itemInArray;
      setCartList(newCartList);
    } else {
      newCartList = [{ item: item, quantity: quantity }, ...cartList];
      setCartList(newCartList);
    }
    itemTotals(newCartList);
  }

  function subtractItem(item, quantity) {
    let newCartList;
    if (isInCart(item.id)) {
      newCartList = [...cartList];
      const itemIndex = findItemIndex(item.id);
      let itemInArray = newCartList[itemIndex];
      if (itemInArray.quantity - quantity > 0) {
        itemInArray.quantity -= quantity;
        newCartList[itemIndex] = itemInArray;
        setCartList(newCartList);
      } else {
        return false;
      }
    } else {
      return false;
    }
    itemTotals(newCartList);
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
      (prev, cur) => prev + cur.item.precio * cur.quantity,
      0
    );
    setCartTotals({ amount: amount, total: totalPrice });
  }

  function isInCart(itemId) {
    return cartList.some((tempItem) => tempItem.item.id === itemId);
  }

  return (
    <cartContext.Provider
      value={{
        addItem,
        removeItem,
        clear,
        isInCart,
        subtractItem,
        cartTotals,
        cartList,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
