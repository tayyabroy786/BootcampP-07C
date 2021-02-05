import React, { useContext } from "react";
import { GlobalContext } from "../context/globalState";
import { transType } from "../context/Typeo";
import "./component.css";

export const IncomeExpense = () => {
  const { transaction }: any = useContext(GlobalContext);

  const ammounts = transaction.map(
    (transactions: transType) => transactions.ammount
  );
  const income = ammounts
    .filter((item: any) => item > 0)
    .reduce((acc: any, item: any) => (acc += item), 0)
    .toFixed(2);

  const expence = (
    ammounts
      .filter((item: any) => item < 0)
      .reduce((acc: any, item: any) => (acc += item), 0) * -1
  ).toFixed(2);
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">{income}</p>
      </div>
      <div>
        <h4>Expence</h4>
        <p className="money minus">{expence}</p>
      </div>
    </div>
  );
};
