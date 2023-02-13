import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import ProductDetails from "./components/ProductDetails";
import Sidebar from "./components/Sidebar";

import products from "./products";

function App() {
  const [count, setCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  //change cartItem count or create new cartItem Object
  function addProductToCard(product, count) {
    if (isProductExistInCart(product) !== false) {
      let newCartItems = [...cartItems];
      let existCount = newCartItems[isProductExistInCart(product)].count;
      newCartItems[isProductExistInCart(product)].count = existCount + count;
      setCartItems(newCartItems);
    } else {
      setCartItems([
        ...cartItems,
        {
          thumbnail: product.images[0].thumbnail,
          productName: product.info.productName,
          price: product.info.hasDiscount
            ? product.info.discountPrice
            : product.info.realPrice,
          productId: product.info.productId,
          count,
        },
      ]);
    }

    //sets product count to 0
    setCount(0);
  }

  //check if product added to cart before and return index of cartItem Object in cartItems state wich is an array of cartItems
  function isProductExistInCart(product) {
    let res = false;
    cartItems.forEach((cartItem, i) => {
      if (cartItem.productId === product.info.productId) res = i;
    });
    return res;
  }

  function cartItemsCount() {
    let counts = 0;
    cartItems.forEach((cartItem) => (counts += cartItem.count));
    return counts;
  }

  return (
    <div className="App sm:px-[8rem]">
      <Navbar cartItems={cartItems} cartItemsCount={cartItemsCount} />

      <ProductDetails
        product={products[0]}
        count={count}
        setCount={setCount}
        addProductToCard={addProductToCard}
      />
    </div>
  );
}

export default App;
