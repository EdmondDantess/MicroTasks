import React from "react";

type NewComponentPropsType = {
  callBack: (buttonName: ValueButtonFromAppTypeProps) => void;
  currentMoneyFromApp: ArrayMoney[];
};

type ValueButtonFromAppTypeProps = "all" | "ruble" | "dollar";

type ArrayMoney = {
  banknots: string;
  value: number;
  number: string;
};

export const NewComponent = (props: NewComponentPropsType) => {
  return (
    <>
      <ul>
        {props.currentMoneyFromApp.map((objFromMoneyArr, index) => {
          return (
            <li key={index}>
              <span>{objFromMoneyArr.banknots}</span>
              <span>{objFromMoneyArr.value}</span>
              <span>{objFromMoneyArr.number}</span>
            </li>
          );
        })}
      </ul>
      <div style={{ marginLeft: "40px" }}>
        <button
          onClick={() => {
            props.callBack("all");
          }}
        >
          all
        </button>
        <button
          onClick={() => {
            props.callBack("ruble");
          }}
        >
          ruble
        </button>
        <button
          onClick={() => {
            props.callBack("dollar");
          }}
        >
          dollar
        </button>
      </div>
    </>
  );
};
