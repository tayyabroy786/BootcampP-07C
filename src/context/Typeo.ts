export type initialStateTransaction = {
  transaction: [{ id: number; text: string; ammount: number }];
};
export type transactionType = {
  transaction: transType[];
};

export type transType = {
  id: number;
  text: string;
  ammount: number;
};

export type actionType =
  | { type: "ADD_TRANSACTION"; payload: transType }
  | { type: "DELETE_TRANSACTION"; payload: number };

export type contextProps = {
  transaction: transType[];
  addTransaction: (trans: transType) => void;
  deleteTransaction: (id: number) => void;
};
export type configFirebase = {
  apiKey: string;
  authDomain: string;
  databaseURL: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
};
