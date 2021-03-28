import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

import { selectMessages } from "../features/messagesSlice";

import "../styles/main.css";

const IndMessage = () => {
  const { id } = useParams();
  const messages = useSelector(selectMessages);

  return (
    <div>
      {messages.map((message) =>
        id === message.id ? (
          <div className="ind__message">
            <h3 className="ind__message__title">{message.name}</h3>
            <span message__from>{message.from}</span>
            <p message__age>{message.age}</p>
            <div>
              <p className="message__message">Message: {message.message}</p>
            </div>
            <button className="">Leave Some Comments</button>
          </div>
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default IndMessage;
