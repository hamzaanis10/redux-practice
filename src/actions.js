export const DECREASE = "DECREASE";
export const INCREASE = "INCREASE";
export const REMOVE = "REMOVE";
export const CLEAR_CART = "CLEAR_CART";
export const GET_TOTALS = "GET_TOTALS";

export const removeItem = (id) => {
  return { type: REMOVE, payload: { id } };
};

export const increaseAmount = (id) => {
  return { type: INCREASE, payload: { id } };
};

export const decreaseAmount = (id, amount) => {
  return { type: DECREASE, payload: { id, amount } };
};
