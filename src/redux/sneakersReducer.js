const initialState = {
  isLoading: false,
  allSneakers: [],
  favorites: [],
  orders: [],
};

const addTofavourite = (state, item) => {
  return {
    ...state,
    favorites: [...state.favorites, item],
  };
};

function addToOrders(state, item) {

  return { ...state, orders: [...state.orders, item] };
}
function removeFromOrders(state, item) {

  const newOrders = state.orders.filter((element) => item !== element);
  return { ...state, orders: newOrders };
}

const saveAllSneakers = (state, allSneakers = []) => {
  return {
    ...state,
    allSneakers: allSneakers,
  }
}

const sneakersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVOURITE':
      return addTofavourite(state, action.payload);
    case "ADD_TO_ORDERS":
      return addToOrders(state, action.payload);
    case "REMOVE_FROM_ORDERS":
      return removeFromOrders(state, action.payload);
    case 'SAVE_ALL_SNEAKERS':
      return saveAllSneakers(state, action.payload);
    default:
      return state;
  }
};

export default sneakersReducer;