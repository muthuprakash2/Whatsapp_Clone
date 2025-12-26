import React from "react";
import MsgBubble from "./MsgBubble";

function MessageList({ messages = [], activeChat }) {
  return (
    <div className="msg-list">
      <div className="date-divider">
        <span>Today</span>
      </div>

      {messages.map((msg, index) => (
        <MsgBubble
          key={index}
          text={msg.text}
          type={msg.type}
          time={msg.time || "9:21am"}
          avatar={msg.type === "received" ? activeChat?.avatar : null}
        />
      ))}
    </div>
  );
}

export default MessageList;
