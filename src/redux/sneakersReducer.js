const initialState = {
    isLoading: false,
    favorites: [],
    orders:[],
  };
  
  const addTofavourite = (state, item) => {
    console.log(item);
    return {
      ...state,
      favorites: [...state.favorites, item],
    };
  };
  function addToOrders(state, item) {
    console.log(item);
    return { ...state, orders: [...state.orders, item] };
  }
  function removeFromOrders(state, item) {
    console.log(item);
    const newOrders = state.orders.filter((element) => item !== element);
    return { ...state, orders: newOrders };
  }
 
  
  const sneakersReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_FAVOURITE':
        return addTofavourite(state, action.payload);
        case "ADD_TO_ORDERS":
      return addToOrders(state, action.payload);
        case "REMOVE_FROM_ORDERS":
      return removeFromOrders(state, action.payload);
      default:
        return state;
    }
  };
  
  export default sneakersReducer;