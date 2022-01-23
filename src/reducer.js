export const initialState = {
  basket: [],
  user: null,
};

// Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    //add basket
    case "ADD_TO_BASKET":
      // for adding item to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    //remove basket
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      //we clone the basket
      let newBasket = [...state.basket];

      if (index >= 0) {
        // item  exixts in basket, remove it..
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }
      return { ...state, basket: newBasket };
    default:
      return state;
  }
}

export default reducer;
