import {useContext } from "react";
import { ShopCartContext } from "../contexts/ShopCartContext";

function EmptyCart() {
  const { emptyCart } = useContext(ShopCartContext)


  return (
    <div className="d-flex justify-content-center justify-content-md-start mt-3">
      <button className={`btn btnBrand`} onClick={(e) => emptyCart(e)}>Empty shopping cart</button>
    </div>
  );
}

export default EmptyCart;