import { SweetAlert } from "../../components/customSwal";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_ITEM,
  CLEAR_CART,
  SET_CART,
  SYNC_CART,
  UPDATE_CART_QUANTITY
} from "../actions/cartAction";

const initialState = {
  items: [],
};

const cartReducer = (state = initialState, action) => {
  let updatedCart;

  switch (action.type) {
    case ADD_TO_CART: {
      if (!Array.isArray(state.items)) {
        console.error("state.items is not an array:", state.items);
        return state;
      }

      const productId =
        action.payload.itemId?.id || action.payload.id || null;

      if (!productId) {
        console.error("Product id is missing in payload:", action.payload);
        return state;
      }

      const existingItemIndex = state.items.findIndex(
        (item) => item.product.id === productId
      );

      if (existingItemIndex !== -1) {
        SweetAlert({
          icon: "info",
          title: "Info!",
          text: "Product Already in cart!",
        });
        return state;
      } else {
        // Determine the product object from the payload structure
        const product = action.payload.itemId || action.payload;
        updatedCart = [...state.items, { product, quantity: 1 }];
      }
      return { ...state, items: updatedCart };
    }

    case REMOVE_FROM_CART:
      updatedCart = state.items.filter((item) => item.id !== action.payload);
      return { ...state, items: updatedCart };

    case UPDATE_CART_QUANTITY:
      // Find the item by id and update its quantity
      updatedCart = state.items.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      return { ...state, items: updatedCart };

    case UPDATE_CART_ITEM:
      return { ...state, items: [] };

    case CLEAR_CART:
      return { ...state, items: [] };

    case SET_CART:
      return { ...state, items: action.payload };

    case SYNC_CART:
      return { ...state, items: action.payload };

    default:
      return state;
  }
};

export default cartReducer;
