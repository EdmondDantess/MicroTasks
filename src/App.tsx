import React, { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Input } from "./components/Input";

function App() {
  const [message, setMessage] = useState([
    { message: "message1" },
    { message: "message2" },
    { message: "message3" },
  ]);

  let [title, setTitle] = useState("");

  const addMessage = (title: string) => {
    console.log(title);
    let newMesage = { message: title };
    setMessage([newMesage, ...message]);
  };

  const callBackButtonHandler = () => {
    addMessage(title);
    setTitle("");
  };

  return (
    <>
      {/* <FullInput funkAddM={addMessage} /> */}
      <Input setTitle={setTitle} title={title} />
      <Button name="Send" callBack={callBackButtonHandler} />
      {message.map((el, index) => {
        return <div key={index}>{el.message}</div>;
      })}
    </>
  );
}

export default App;
