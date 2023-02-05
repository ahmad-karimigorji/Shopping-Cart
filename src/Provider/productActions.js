import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SEARCH_PRODUCTS,
  SELECT_TYPE,
  SORT_PRICE,
  TOTAL_PRICE_OF_CART,
} from "./productTypes";

export function addToCart(product) {
  return {
    type: ADD_TO_CART,
    payLoad: product,
  };
}
export function removeFromCart(id) {
  return {
    type: REMOVE_FROM_CART,
    payLoad: id,
  };
}
export function totalPriceOfCart() {
  return {
    type: TOTAL_PRICE_OF_CART,
  };
}
export function searchProducts(value) {
  return {
    type: SEARCH_PRODUCTS,
    payLoad: value,
  };
}
export function sortByPrice(value) {
  return {
    type: SORT_PRICE,
    payLoad: value,
  };
}
export function selectType(value) {
  return {
    type: SELECT_TYPE,
    payLoad: value,
  };
}
