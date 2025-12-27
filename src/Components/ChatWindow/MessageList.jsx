import React, { useEffect, useRef } from "react";
import MsgBubble from "./MsgBubble";

function MessageList({ messages = [], activeChat, userAvatar }) {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="msg-list">
      <div className="date-divider">
        <span>Today</span>
      </div>

      {messages.map((msg, index) => (
        <MsgBubble
          key={msg.id || index}
          text={msg.text}
          type={msg.type}
          time={msg.time || "9:21am"}
          avatar={msg.type === "received" ? activeChat?.avatar : userAvatar}
          status={msg.status}
          isGroup={activeChat?.isGroup}
        />
      ))}

      <div ref={messagesEndRef} />
    </div>
  );
}

export default MessageList;