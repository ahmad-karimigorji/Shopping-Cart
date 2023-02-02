import Select from "react-select";
import { shopData } from "../../shopData/shopData";
import Product from "./Product/Product";

const HomePage = () => {
  return (
    <div className="px-2">
      <div className="space-y-2 md:w-[600px] md:mx-auto">
        <div className="space-y-2 sm:flex sm:space-x-2 sm:space-y-0">
          <Select className="w-full sm:w-1/2" />
          <Select className="w-full sm:w-1/2" />
        </div>
        <input className="w-full py-[6px] px-[10px] rounded-[4px] border border-[#ccc] placeholder-gray-500" type="text" placeholder="Search..." />
      </div>
      <div className="flex flex-wrap justify-evenly gap-x-2 gap-y-3 mt-4">
        {shopData.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
