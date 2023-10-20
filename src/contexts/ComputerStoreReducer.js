const ComputerStoreReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "GET_PROFILE":
      return {
        ...state,
        userProfile: action.payload,
      };
    case "GET_PRODUCT":
      return {
        ...state,
        product: action.payload,
      };
    case "GET_ALL_PRODUCT":
      return {
        ...state,
        listProducts: action.payload,
      };
    case "GET_BY_BRAND":
      return {
        ...state,
        listProducts: action.payload,
      };
    case "GET_BY_CATEGORY":
      return {
        ...state,
        listProducts: action.payload,
      };
    case "SORT_BY_PRICE":
      return {
        ...state,
        listProducts: action.payload,
      };
    case "SORT_BY_OFFER":
      return {
        ...state,
        listProducts: action.payload,
      };
    case "SORT_BY_NAME":
      return {
        ...state,
        listProducts: action.payload,
      };
    default:
      break;
  }
};

export default ComputerStoreReducer;
