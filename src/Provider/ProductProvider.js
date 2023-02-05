import { createContext, useReducer } from "react";
import { addToCart, searchProducts, sortByPrice, removeFromCart, selectType, totalPriceOfCart } from "./productActions";
import reducer, { initialState } from "./productReducer";

export const ProductContext = createContext();
export const ProductContextDispatch = createContext();

// const initialState = []

const ProductProvider = ({ children }) => {
  const [stateProducts, dispatch] = useReducer(reducer, initialState);

  const addToCartHandler = (id) => {
    dispatch(addToCart(id))
  }

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

    const totalPriceOfCartHandler = () => {
    dispatch(totalPriceOfCart())
  }

  const searchProductsHandler = (value) => {
    dispatch(searchProducts(value))
  }

  const sortPriceProductsHandler = (value) => {
    dispatch(sortByPrice(value))
  }

  const selectTypeProductsHandler = (value) => {
    dispatch(selectType(value))
  }

  const dispatchHandler = {
    addToCartHandler: (id) => addToCartHandler(id),
    removeFromCartHandler: (id) => removeFromCartHandler(id),
    totalPriceOfCartHandler: () => totalPriceOfCartHandler(),
    searchProductsHandler: (value) => searchProductsHandler(value),
    sortPriceProductsHandler: (value) => sortPriceProductsHandler(value),
    selectTypeProductsHandler: (value) => selectTypeProductsHandler(value),
  }
  return (
    <ProductContext.Provider value={stateProducts}>
      <ProductContextDispatch.Provider value={dispatchHandler} >
        {children}
      </ProductContextDispatch.Provider>
    </ProductContext.Provider>
  );
};

export default ProductProvider;
