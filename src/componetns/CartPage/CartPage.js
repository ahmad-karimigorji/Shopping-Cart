import { useContext } from "react";
import { ProductContext } from "../../Provider/ProductProvider";
import CartProduct from "./CartProduct/CartProduct";

const CartPage = () => {
  const { cart, totalPrice } = useContext(ProductContext);
  return (
    <div>
      <h2
        className="text-center
      mb-6 font-bold"
      >
        {!cart.length
          ? "Your Cart Is Empty !"
          : `Your Total Price Of Cart is : ${totalPrice} $`}
      </h2>
      {cart && cart.length !== 0 && (
        <div className="border-t-2 border-t-slate-800 pt-6 sm:px-5 md:px-10">
          {cart.map((product) => (
            <CartProduct key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
