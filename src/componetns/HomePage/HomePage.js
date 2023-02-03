import { useContext } from "react";
import Select from "react-select";
import {
  ProductContext,
  ProductContextDispatch,
} from "../../Provider/ProductProvider";
// import { shopData } from "../../shopData/shopData";
import Product from "./Product/Product";

const HomePage = () => {
  const { products } = useContext(ProductContext);
  const {
    searchProductsHandler,
    sortPriceProductsHandler,
    selectTypeProductsHandler,
  } = useContext(ProductContextDispatch);
  // console.log(dispatchHandler);
  // dispatchHandler = {
  //   addToCartHandler: (id) => addToCartHandler(id),
  //   removeFromCartHandler: (id) => removeFromCartHandler(id),
  // }

  const searchInputHandler = (e) => {
    const value = e.target.value
    searchProductsHandler(value);
    sortPriceProductsHandler(value);
    selectTypeProductsHandler(value);
  };

  return (
    <div className="px-2">
      <div className="space-y-2 md:w-[600px] md:mx-auto">
        <div className="space-y-2 sm:flex sm:space-x-2 sm:space-y-0">
          <Select className="w-full sm:w-1/2" />
          <Select className="w-full sm:w-1/2" />
        </div>
        <input
          className="w-full py-[6px] px-[10px] rounded-[4px] border border-[#ccc] placeholder-gray-500"
          type="text"
          placeholder="Search..."
          onChange={searchInputHandler}
        />
      </div>
      <div className="flex flex-wrap justify-evenly gap-x-2 gap-y-3 mt-4">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
