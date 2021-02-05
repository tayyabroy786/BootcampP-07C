import React, { createContext, useReducer } from "react";
import { AppReducer } from "./appReducer";
import { transType, transactionType, contextProps } from "./Typeo";

const initialState: transactionType = {
  transaction: [{ id: 1, text: "Bilal", ammount: 40 }],
};

export const GlobalContext = createContext<Partial<contextProps>>({});

export const GlobalProvider = ({ children }: any) => {
  let [state, dispatch] = useReducer(AppReducer, initialState);

  let deleteTransaction = (id: number) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };
  let addTransaction = (transaction: transType) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };
  return (
    <GlobalContext.Provider
      value={{
        transaction: state.transaction,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
