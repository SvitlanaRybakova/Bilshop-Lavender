import { createContext, useState, useEffect } from "react";

export const ShopCartContext = createContext();

function ShopCartContextProvider(props) {
  const [purchases, setPurchases] = useState({
    userId: 1,
    products: [],
    deliveryCost: 0,
    priceTotal: 0,
  });

  //Total sum in Navbar's cart icon 
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(purchases.priceTotal);
  }, [purchases]);

  // Number of products in Navbar's cart icon
  const [shoppingCartNum, setShoppingCartNum] = useState(purchases.products.length);

  useEffect(() => {
    setShoppingCartNum(purchases.products.length)
  }, [purchases]);


 // Function for setting purcheses. Function takes argument temp which is a copy of current purchases with updates and overwrites purchases with that updated data.  
  const setPurchasesState = (temp) => {
    temp.priceTotal = getTotalPrice()
    setPurchases(() => ({
      products: temp.products,
      deliveryCost: temp.deliveryCost,
      priceTotal: temp.priceTotal,
    }))
  }
  
  // Shipping cost
  const setDeliveryCost = (e) => {
    let temp = purchases //make a copy of current purchases
    temp.deliveryCost = e.currentTarget.value === "paidDelivery" ? 5000 : 0 //update deliveryCost in the copy
    setPurchasesState(temp) //overwrite purchases with new updated data
  };
  
  //Function for updating total price 
  const getTotalPrice = () => {
    let updatedTotalPrice = 0
    
    purchases.products.forEach((car) => {
      updatedTotalPrice = updatedTotalPrice + car.price
    })

    if(typeof purchases.deliveryCost === 'number') {
      updatedTotalPrice = updatedTotalPrice + purchases.deliveryCost
    }
    return updatedTotalPrice
  }
  
  // Remove from cart
  const deleteProduct = (productToDelete) => {
    let temp = purchases //make a copy of current purchases
    temp.products = purchases.products.filter((product) => product.vin !== productToDelete.vin) //update products in the copy
    setPurchasesState(temp) //overwrite purchases with new updated data
  }

  //Add a car to cart
  const addCarToCart = (car) => {
    if(!purchases.products.includes(car)){
      let temp = purchases //make a copy of current purchases
      if(!temp.products.includes(car)){
        temp.products.unshift(car) //update products in the copy
        setPurchasesState(temp) //overwrite purchases with new updated data
      }
    }
  }

  const values = {
    purchases,
    setDeliveryCost,
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
