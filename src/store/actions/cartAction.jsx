// import axios from "axios";
import { fetchCartService, addToCartService } from "../../services/cartService";

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_CART_ITEM = "UPDATE_CART_ITEM";
export const CLEAR_CART = "CLEAR_CART";
export const SET_CART = "SET_CART";
export const SYNC_CART = "SYNC_CART";
export const UPDATE_CART_QUANTITY = "UPDATE_CART_QUANTITY";

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});

export const removeFromCart = (itemId) => ({
  type: REMOVE_FROM_CART,
  payload: itemId,
});

export const updateCartItem = (itemId, quantity) => ({
  type: UPDATE_CART_ITEM,
  payload: { itemId, quantity },
});

export const updateCartQuantity = (itemId, quantity) => ({
  type: UPDATE_CART_ITEM,
  payload: { itemId, quantity },
});

export const clearCart = () => ({
  type: CLEAR_CART,
});

export const setCart = (items) => ({
  type: SET_CART,
  payload: items,
});

export const syncCart = () => async (dispatch, getState) => {
  try {
    const response = await fetchCartService();

    const apiCart = response.data.cart;

    const { items: currentCart } = getState().cart;

    const missingInState = apiCart.filter(
      (apiItem) => !currentCart.some((stateItem) => stateItem.id === apiItem.id)
    );

    // Find items that are in the Redux state but missing in the API (Send to API)
    const missingInAPI = currentCart.filter(
      (stateItem) => !apiCart.some((apiItem) => apiItem.id === stateItem.id)
    );

    // Add missing items from API to Redux state
    if (missingInState.length > 0) {
      dispatch({
        type: SYNC_CART,
        payload: [...currentCart, ...missingInState], // Merge missing items
      });
    }

    // Loop through missing items and send them to the API one by one
    for (const item of missingInAPI) {
      try {
        await addToCartService(item);
      } catch (error) {
        console.error("Failed to create cart item:", item, error);
      }
    }

  } catch (error) {
    console.error("Failed to sync cart:", error);
  }
};
