import { useContext } from "react";
import { HiTrash } from "react-icons/hi";
import { ProductContextDispatch } from "../../../Provider/ProductProvider";

const CartProduct = ({ product }) => {
  const { name, price, type, url } = product;

  const {removeFromCartHandler, totalPriceOfCartHandler} = useContext(ProductContextDispatch)

  const clickHandler = () => {
    removeFromCartHandler(product.id)
    totalPriceOfCartHandler()
  }

  return (
    <div className="border-b border-b-slate-300 mb-5">
      <div className="flex items-center justify-between pb-2">
        <img className="w-24 sm:w-48" src={url[0]} alt={name} />
        <div className="flex flex-col ml-3 ">
          <span className="self-center mb-2">
            <b>{type}</b>
          </span>
          <span>
            Name : <b>{name}</b>
          </span>
          <div className="flex items-center justify-between">
            <span>
              Price : <b>{price} $</b>
            </span>
            <button className="ml-4 text-red-500 p-1" onClick={clickHandler}>
              <HiTrash />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
