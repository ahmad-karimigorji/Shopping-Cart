import { shopData } from "../shopData/shopData";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SEARCH_PRODUCTS,
  SORT_PRICE,
  SELECT_TYPE,
  TOTAL_PRICE_OF_CART,
} from "./productTypes";

export const initialState = {
  products: shopData,
  cart: [],
  totalPrice: 0,
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
    case TOTAL_PRICE_OF_CART:
      const total = state.cart.reduce((accu, curr) => accu + curr.price, 0);
      return { ...state, totalPrice: total };
    case SEARCH_PRODUCTS:
      const filtered = shopData.filter((product) =>
        [product.name, product.brand]
          .join(" ")
          .toLowerCase()
          .includes(payLoad.toLowerCase())
      );
      return { ...state, products: filtered };
    case SORT_PRICE:
      let sortedProducts = [];
      if (payLoad === "") {
        return state;
      } else if (payLoad === "highest") {
        sortedProducts = [...state.products].sort((a, b) => b.price - a.price);
      } else {
        sortedProducts = [...state.products].sort((a, b) => a.price - b.price);
      }
      return { ...state, products: sortedProducts };
    case SELECT_TYPE:
      const filteredTypeProducts = state.products.filter((product) =>
        product.type.toLowerCase().includes(payLoad.toLowerCase())
      );
      console.log(filteredTypeProducts);
      return { ...state, products: filteredTypeProducts };

    default:
      return state;
  }
};

export default reducer;
