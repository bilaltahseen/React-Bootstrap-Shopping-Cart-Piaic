const initialState = {
  cartItems: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CART':
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    case 'REMOVE_CART':
      return {
        ...state,
        cartItems: [...state.cartItems].filter(
          (elem) => elem.itemId !== action.payload
        ),
      };
    case 'SELECTED':
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
