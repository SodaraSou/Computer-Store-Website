import { createContext, useReducer } from "react";
import ComputerStoreReducer from "./ComputerStoreReducer";

const ComputerStoreContext = createContext();

export const ComputerStoreProvider = ({ children }) => {
  const initialState = {
    product: {},
    listProducts: [],
    userProfile: {},
    loading: false,
  };
  const [state, dispatch] = useReducer(ComputerStoreReducer, initialState);

  return (
    <ComputerStoreContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ComputerStoreContext.Provider>
  );
};

export default ComputerStoreContext;
