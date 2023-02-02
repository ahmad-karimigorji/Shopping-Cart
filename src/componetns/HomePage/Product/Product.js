import { HiPlus } from "react-icons/hi";

const Product = ({ product }) => {
  const { name, price, url } = product;
  return (
    <div className="relative w-72 h-[360px]">
      <img src={url[0]} alt="" className="h-full object-cover"/>
      <button className="absolute w-7 h-7 flex justify-center items-center top-2 right-2 bg-green-500 rounded-full text-white">
        <HiPlus />
      </button>
      <div className="absolute bottom-0 w-full bg-transparent/30 text-white py-4 px-5">
        <h2 className="font-bold">{name}</h2>
        <p>{price} $</p>
      </div>
    </div>
  );
};

export default Product;
