import { useContext } from "react";
import { ProductContext } from "../../Provider/ProductProvider";
import CartProduct from "./CartProduct/CartProduct";

const CartPage = () => {
  const { cart } = useContext(ProductContext);
  console.log(cart);
  return (
    <div>
      <h2
        className="text-center
      mb-6 font-bold"
      >
        {!cart.length
          ? "Your Cart Is Empty !"
          : "Your Cart Total Price is : 300 $"}
      </h2>
      {cart && cart.length !== 0 && (
        <div className="border-t-2 border-t-slate-800 pt-6 sm:px-5 md:px-10">{
          cart.map((product) => <CartProduct product={product} />)
        }</div>
      )}
    </div>
  );
};

export default CartPage;
