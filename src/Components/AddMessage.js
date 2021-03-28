import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setMessages } from "../features/messagesSlice";

import { v4 as uuidv4 } from "uuid";

import "../styles/main.css";

const AddMessage = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [from, setFrom] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const addMessage = (e) => {
    if (name !== "" && age !== "" && from !== "" && message !== "") {
      e.preventDefault();

      dispatch(
        setMessages({
          id: uuidv4(),
          name: name,
          age: age,
          from: from,
          message: message,
        })
      );
      history.push("/");
    } else {
      alert("Please do not leave blank 🥺");
    }
  };

  return (
    <div className="add__message">
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <input
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      ></input>
      <input
        placeholder="From"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
      ></input>
      <input
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></input>
      <button onClick={(e) => addMessage(e)}>Add A Message</button>
    </div>
  );
};

export default AddMessage;
