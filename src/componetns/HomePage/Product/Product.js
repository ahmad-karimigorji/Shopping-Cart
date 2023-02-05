import { useContext, useEffect, useState } from "react";
import { HiMinus, HiPlus } from "react-icons/hi";
import {
  ProductContext,
  ProductContextDispatch,
} from "../../../Provider/ProductProvider";

const Product = ({ product }) => {
  const { id, name, price, url } = product;
  const { cart } = useContext(ProductContext);

  const [isInCart, setIsInCart] = useState(false);
  const { addToCartHandler, removeFromCartHandler, totalPriceOfCartHandler } = useContext(
    ProductContextDispatch
  );

  useEffect(() => {
    const selected = cart.some((item) => item.id === id);
    selected && setIsInCart(true);
  }, [])

  const clickHandler = (id) => {
    console.log(cart);
    const selected = cart.some((item) => item.id === id);
    if (selected) {
      removeFromCartHandler(id);
      totalPriceOfCartHandler()
      setIsInCart(false);
    } else {
      addToCartHandler({...product, quantity: 1});
      totalPriceOfCartHandler()
      setIsInCart(true);
    }

  };
  return (
    <div className="relative w-72 h-[360px] rounded-xl overflow-hidden">
      <img src={url[0]} alt="" className="h-full object-cover" />
      <button
        className={`${
          isInCart ? "bg-red-400" : "bg-green-400"
        } absolute p-4 top-0 right-0  text-black`}
        onClick={() => clickHandler(id)}
      >
        {isInCart ? <HiMinus /> : <HiPlus />}
      </button>
      <div className="absolute bottom-0 w-full bg-transparent/30 text-white py-4 px-5">
        <h2 className="font-bold">{name}</h2>
        <p>{price} $</p>
      </div>
    </div>
  );
};

export default Product;
