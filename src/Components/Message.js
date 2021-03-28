import React from "react";
import "../styles/main.css";

const Message = ({ data }) => {
  return (
    <div className="message">
      <div>
        <h1 className="message__message">{data.message}</h1>
      </div>
      <div>
        <h3 className="message__title">{data.name}</h3>
        <p className="message__age">{data.age}</p>
        <p className="message__from">{data.from}</p>
      </div>
    </div>
  );
};

export default Message;
