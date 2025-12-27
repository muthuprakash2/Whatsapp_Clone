import React from "react";
import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";
import MsgInput from "./MsgInput";
import "./chatWindow.css";

function ChatWindow({ activeChat, onSend, userAvatar }) {
  return (
    <div className={`chat-window ${activeChat?.isGroup ? 'group-chat' : 'individual-chat'}`}>
      <ChatHeader activeChat={activeChat} />
      <MessageList
        messages={activeChat?.messages || []}
        activeChat={activeChat}
        userAvatar={userAvatar}
      />
      <MsgInput onSend={onSend} />
    </div>
  );
}

export default ChatWindow;