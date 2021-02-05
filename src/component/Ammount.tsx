import React, { useContext } from "react";
import { GlobalContext } from "../context/globalState";
import { transType } from "../context/Typeo";
import "./component.css";

export const Ammount = () => {
  const { transaction }: any = useContext(GlobalContext);
  const amounts = transaction.map(
    (trans: transType, id: number) => trans.ammount
  );
  const total = amounts
    .reduce((acc: any, item: any) => (acc += item), 0)
    .toFixed(2);
  return (
    <div>
      <h4>Your Balance</h4>
      <h1> ${total} </h1>
    </div>
  );
};
