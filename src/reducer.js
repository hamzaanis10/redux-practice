import cartItems from "./cart-items";
import { CLEAR_CART, REMOVE, INCREASE, DECREASE, GET_TOTALS } from "./actions";

const initialStore = {
  cart: cartItems,
  amount: 0,
  total: 0,
};

function reducer(state = initialStore, action) {
  //CLEAR CART functionality
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  //INCREASE functionality
  if (action.type === INCREASE) {
    let updatedCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload.id) {
        return { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });
    return {
      ...state,
      cart: updatedCart,
    };
  }
  //DECREASE functionality
  if (action.type === DECREASE) {
    let updatedCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload.id) {
        return { ...cartItem, amount: cartItem.amount - 1 };
      }
      return cartItem;
    });

    return { ...state, cart: updatedCart };
  }
  //REMOVE functionality
  if (action.type === REMOVE) {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload.id),
    };
  }

  // GET_TOTALS functionality
  if (action.type === GET_TOTALS) {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;

        cartTotal.amount += amount;
        cartTotal.total += itemTotal;

        return cartTotal;
      },
      {
        amount: 0,
        total: 0,
      }
    );
    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  }
  return state;
}

export default reducer;
