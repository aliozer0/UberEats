let defaultState = {
  selecedItems: { items: [], restaurantName: "" },
};
let cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      {
        const newState = { ...state };
        newState.selecedItems = {
          items: [...newState.selecedItems.items, action.payload],
          restaurantName: action.payload.restaurantName,
        };
      }

      console.log("newState", "=>");
      return newState;

    default:
      return state;
  }
};
