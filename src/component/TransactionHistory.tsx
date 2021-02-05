import React, { useContext, Fragment } from "react";
import { GlobalContext } from "../context/globalState";
import { Transaction } from "./Transaction";
import { transType } from "../context/Typeo";

export const TransactionHistory = () => {
  let { transaction }: any = useContext(GlobalContext);
  return (
    <Fragment>
      <h3>History</h3>
      <ul className="list">
        {" "}
        {transaction.map((transaction: transType, id: number) => (
          <Transaction key={transaction.id} transactions={transaction} />
        ))}
      </ul>
    </Fragment>
  );
};
