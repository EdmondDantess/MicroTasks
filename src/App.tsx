import React, { useState } from "react";
import "./App.css";
import { NewComponent } from "./NewComponent";

type ValueButtonType = "all" | "ruble" | "dollar";

function App() {
  const [money, setMoney] = useState([
    { banknots: "Dollars", value: 100, number: " a1234567890" },
    { banknots: "Dollars", value: 50, number: " z1234567890" },
    { banknots: "RUBLS", value: 100, number: " w1234567890" },
    { banknots: "Dollars", value: 100, number: " e1234567890" },
    { banknots: "Dollars", value: 50, number: " c1234567890" },
    { banknots: "RUBLS", value: 100, number: " r1234567890" },
    { banknots: "Dollars", value: 50, number: " x1234567890" },
    { banknots: "RUBLS", value: 50, number: " v1234567890" },
  ]);

  let [ValueButton, setValueButton] = useState<ValueButtonType>("all");

  let currentMoney = money;

  if (ValueButton === "ruble") {
    currentMoney = money.filter(
      (filteredMoney) => filteredMoney.banknots === "RUBLS"
    );
  }
  if (ValueButton === "dollar") {
    currentMoney = money.filter(
      (filteredMoney) => filteredMoney.banknots === "Dollars"
    );
  }

  const onClickFilterkHandler = (buttonName: ValueButtonType) => {
    setValueButton(buttonName);
  };

  return (
    <NewComponent
      callBack={onClickFilterkHandler}
      currentMoneyFromApp={currentMoney}
    />
  );
}

export default App;
