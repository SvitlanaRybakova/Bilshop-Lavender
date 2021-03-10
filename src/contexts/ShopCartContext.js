import { createContext, useState, useEffect } from "react";

export const ShopCartContext = createContext();

function ShopCartContextProvider(props) {
  const [purchases, setPurchases] = useState({
    userId: 1,
    products: [],
    deliveryCost: 0,
    priceTotal: "Choose delivery option",
  });

  //Total
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let totalPrice = 0;
    purchases.products.forEach((car) => {
      totalPrice = totalPrice + car.price;
    });
    setTotal(totalPrice);
  }, [purchases]);

  // Number of items in cart
  const [shoppingCartNum, setShoppingCartNum] = useState(purchases.products.length);

  useEffect(() => {
    setShoppingCartNum(purchases.products.length)
  }, [purchases]);

  // Shipping cost
  const setDeliveryCost = (e) => {
    purchases.deliveryCost =
      e.currentTarget.value === "paidDelivery" ? 5000 : 0;
    setPriceTotal();
  };

    // Total price (including shipping cost)
  function setPriceTotal() {
    let updatedTotalPrice = purchases.deliveryCost;
    for (const product of purchases.products) {
      updatedTotalPrice += product.price;
    }
    purchases.priceTotal = updatedTotalPrice;
  }

  //   Add/remove from cart
  const deleteProduct = (productToDelete) => {
    setPurchases(({
      products: purchases.products.filter(
        (product) => product.vin !== productToDelete.vin
      )
    }))
    if (purchases.products.length === 0) {
      purchases.deliveryCost = 0;
    }
    setPriceTotal();
  }

  const addCarToCart = (car) => {
    if(!purchases.products.includes(car)){
      setPurchases(previousState => ({
        products: [car, ...previousState.products]
      }))
    }
  }

  const values = {
    purchases,
    setDeliveryCost,
    setPriceTotal,
    deleteProduct,
    addCarToCart,
    shoppingCartNum,
    total,
  };

  return (
    <ShopCartContext.Provider value={values}>
      {props.children}
    </ShopCartContext.Provider>
  );
}

export default ShopCartContextProvider;
