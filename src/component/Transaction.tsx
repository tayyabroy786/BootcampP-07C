import React, { useContext } from "react";
import { GlobalContext } from "../context/globalState";
import "./component.css";

export const Transaction = ({ transactions }: any) => {
  let { deleteTransaction }: any = useContext(GlobalContext);
  let sign: any = transactions.ammount < 0 ? "-" : "+";
  return (
    <li className={transactions.ammount < 0 ? "minus" : "plus"}>
      {transactions.text}{" "}
      <span>
        {sign}${Math.abs(transactions.ammount)}
      </span>
      <button
        className="btn-delete"
        onClick={() => deleteTransaction(transactions.id)}
      >
        x
      </button>
    </li>
  );
};
