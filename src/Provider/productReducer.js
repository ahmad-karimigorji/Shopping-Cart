import { shopData } from "../shopData/shopData";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SEARCH_PRODUCTS,
  SORT_PRICE,
  SELECT_TYPE,
} from "./productTypes";

export const initialState = {
  products: shopData,
  cart: [],
};

const reducer = (state, action) => {
  const { type, payLoad } = action;
  switch (type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, payLoad],
      };
    case REMOVE_FROM_CART:
      const filteredProducts = state.cart.filter(
        (product) => product.id !== payLoad
      );
      return { ...state, cart: filteredProducts };
    case SEARCH_PRODUCTS:
      const filtered = shopData.filter((product) =>
        [product.name, product.brand]
          .join(" ")
          .toLowerCase()
          .includes(payLoad.toLowerCase())
      );
      return { ...state, products: filtered };
    case SORT_PRICE:
      const sortedProducts = [...state.products].sort(
        (a, b) => a.price - b.price
      );
      return { ...state, products: sortedProducts };
    case SELECT_TYPE:
      const filteredTypeProducts = state.products.filter(
        (product) => product.type.toLowerCase() === payLoad.toLowerCase()
      );
      return { ...state, products: filteredTypeProducts };

    default:
      return state;
  }
};

export default reducer;
