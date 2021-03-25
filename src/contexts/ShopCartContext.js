import { createContext, useState, useEffect, useContext } from "react";

export const ShopCartContext = createContext();

function ShopCartContextProvider(props) {
  const [purchases, setPurchases] = useState({
    //If you need to add a property to this object, add that property as well to confirmation page, where this obj resets to empty state (at handleClick function)
    userId: 1,
    products: [],
    deliveryCost: 0,
    isDeliveryChoosed: false,
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
  

  // Local storage
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => { //at first rendering
    if (localStorage.getItem("products") !== null) { //if there is "products" in the Local storage, take it from there 
      purchases.products = JSON.parse(localStorage.getItem("products")); //overwrite products in the original purchases with products from LS
      setPurchasesState(purchases); //this function counts priceTotal and then updates purcheses as well
    }else{
      setPurchasesState(purchases);
    }
    setIsFetched(true);
  }, [])

  useEffect(() => {//as soon as purchases changes
    if(isFetched === true){
      localStorage.setItem("products", JSON.stringify(purchases.products)); //take the updated purchases and send it to Local Storage
    }
  }, [purchases])

 // Function for setting purcheses. Function takes argument Obj which is a copy of purchases with updates.    
  const setPurchasesState = (obj) => {
    obj.priceTotal = getTotalPrice() //counsts priceTotal
    setPurchases(() => ({ //and overwrites purchases with that updated data.
      products: obj.products,
      deliveryCost: obj.deliveryCost,
      priceTotal: obj.priceTotal,
      isDeliveryChoosed: obj.isDeliveryChoosed
    }))
  }
  
  // Shipping cost
  const setDeliveryCost = (e) => {
    purchases.isDeliveryChoosed = true //For blocking to checkout without delivery choosed
    purchases.deliveryCost = e.currentTarget.value === "paidDelivery" ? 5000 : 0 //update deliveryCost in the copy
    setPurchasesState(purchases) //overwrite purchases with new updated data
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
    purchases.products = purchases.products.filter((product) => product.vin !== productToDelete.vin) //update products 
    purchases.isDeliveryChoosed = false //reset isDeliveryChoosed 
    setPurchasesState(purchases) //overwrite purchases with new updated data
  }

  //Add a car to cart
  const addCarToCart = (car) => {
      let isCar = false;
      purchases.products.forEach(element => {
        if (car.vin == element.vin) {
          isCar = true;
        }
      });
    if(isCar === false){
        purchases.products.unshift(car) //update products 
        setPurchasesState(purchases) //overwrite purchases with new updated data
    }
  }

  // Empty shopping cart
  const emptyCart = () =>{
    purchases.products = [];//clean up array with products
    purchases.isDeliveryChoosed = false //reset isDeliveryChoosed 
    setPurchasesState(purchases) //overwrite purchases with new updated data
  }

  const values = {
    purchases,
    setPurchases,
    setDeliveryCost,
    deleteProduct,
    addCarToCart,
    shoppingCartNum,
    total,
    emptyCart,
  };

  return (
    <ShopCartContext.Provider value={values}>
      {props.children}
    </ShopCartContext.Provider>
  );
}

export default ShopCartContextProvider;
