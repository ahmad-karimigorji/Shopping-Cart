import { useContext } from "react";
import { ProductContext } from "../../Provider/ProductProvider";
import Filter from "../Filter/Filter";
import Product from "./Product/Product";

const HomePage = () => {
  const { products } = useContext(ProductContext);
  console.log('products', products);

  return (
    <div className="px-2">
      <Filter />
      <div className="flex flex-wrap justify-evenly gap-x-2 gap-y-6 mt-4">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
