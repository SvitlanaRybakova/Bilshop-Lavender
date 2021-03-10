import { createContext, useState, useEffect } from "react";

export const ShopCartContext = createContext();

function ShopCartContextProvider(props) {
  const [purchases, setPurchases] = useState({
    userId: 1,
    products: [],
    deliveryCost: 0,
    priceTotal: "Choose delivery option",
  });

  const [shoppingCartNum, setShoppingCartNum] = useState(purchases.products.length);

  useEffect(() => {
    setShoppingCartNum(purchases.products.length)
  }, [purchases]);


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
  };

  return (
    <ShopCartContext.Provider value={values}>
      {props.children}
    </ShopCartContext.Provider>
  );
}

export default ShopCartContextProvider;
