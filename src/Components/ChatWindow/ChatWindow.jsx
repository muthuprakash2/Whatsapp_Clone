import React from "react";
import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";
import MsgInput from "./MsgInput";
import "./chatWindow.css";

function ChatWindow({ activeChat }) {
  return (
    <div className="chat-window">
      <ChatHeader activeChat={activeChat} />
      <MessageList
        messages={activeChat?.messages || []}
        activeChat={activeChat}
      />
      <MsgInput />
    </div>
  );
}

export default ChatWindow;
