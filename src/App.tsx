import React from "react";
import "./component/component.css";
import { AddTransaction } from "./component/addTransaction";
import { Ammount } from "./component/Ammount";
import { IncomeExpense } from "./component/IncomeExpense";
import { TransactionHistory } from "./component/TransactionHistory";
import firebase from "./firebase";
import { GlobalProvider } from "./context/globalState";

function App() {
  const messaging = firebase.messaging();
  messaging
    .requestPermission()
    .then(() => {
      return messaging.getToken();
    })
    .then((token) => {
      console.log("token", token);
    });
  return (
    <GlobalProvider>
      <h3>Expense Tracker by Tayyab Roy</h3>
      <div className="container">
        <Ammount />
        <IncomeExpense />
        <TransactionHistory />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
