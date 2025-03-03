import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_ITEM,
  CLEAR_CART,
  SET_CART,
  SYNC_CART,
} from "../actions/cartAction";

const initialState = {
  items: [],
};

const cartReducer = (state = initialState, action) => {
  let updatedCart;

  switch (action.type) {
    case ADD_TO_CART:
      updatedCart = [...state.items, action.payload];
      return { ...state, items: updatedCart };

    case REMOVE_FROM_CART:
      updatedCart = state.items.filter((item) => item.id !== action.payload);
      return { ...state, items: updatedCart };

    case UPDATE_CART_ITEM: {
      if (!Array.isArray(state.items)) {
        console.error("state.items is not an array:", state.items);
        return state; // Prevent execution
      }

      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.itemId.id
      );

      if (existingItemIndex !== -1) {
        // Item exists, update it
        updatedCart = state.items.map((item) =>
          item.id === action.payload.itemId.id
            ? { ...item, ...action.payload.itemId }
            : item
        );
      } else {
        // console.log("action.payload.itemId: ", action.payload.itemId);
        const product = action.payload.itemId;
        updatedCart = [
          ...state.items,
          { product, quantity: 1 },
        ];
      }

      // console.log("After update:", updatedCart);
      return { ...state, items: updatedCart };
    }

    case CLEAR_CART:
      return { ...state, items: [] };

    case SET_CART:
      return { ...state, items: action.payload };

    case SYNC_CART:
      return { ...state, items: action.payload };

    default:
      return { ...state };
  }
};

export default cartReducer;
