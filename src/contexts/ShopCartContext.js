import { createContext, useState } from "react";

export const ShopCartContext = createContext();

function ShopCartContextProvider(props) {
  const [purchases, setPurchases] = useState({
    userId: 1,
    products: [],
    deliveryCost: 0,
    priceTotal: "Choose delivery option",
  });

  const setDeliveryCost = (e) => {
    purchases.deliveryCost =
      e.currentTarget.value === "paidDelivery" ? 5000 : 0;
    setPriceTotal();
  };

  function setPriceTotal() {
    let updatedTotalPrice = purchases.deliveryCost;

    for (const product of purchases.products) {
      updatedTotalPrice += product.price;
    }

    purchases.priceTotal = updatedTotalPrice;
  }

  function deleteProduct(productToDelete) {
    const updateProducts = purchases.products.filter(
      (product) => product.vin !== productToDelete.vin
    );
    purchases.products = updateProducts;
    if (purchases.products.length === 0) {
      purchases.deliveryCost = 0;
    }
    setPriceTotal();
  }

  function addCarToCart(car) {
    if(!purchases.products.includes(car)) {
      purchases.products.unshift(car);
    }
  }

  const values = {
    purchases,
    setDeliveryCost,
    setPriceTotal,
    deleteProduct,
    addCarToCart,
  };

  return (
    <ShopCartContext.Provider value={values}>
      {props.children}
    </ShopCartContext.Provider>
  );
}

export default ShopCartContextProvider;
