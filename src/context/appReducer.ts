import { transactionType, actionType } from "./Typeo";

export const AppReducer = (state: transactionType, action: actionType) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,

        transaction: state.transaction.filter(
          (transactions: any) => transactions.id !== action.payload
        ),
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transaction: [action.payload, ...state.transaction],
      };
    default:
      return state;
  }
};
