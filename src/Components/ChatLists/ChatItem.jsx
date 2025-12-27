import React from "react";
import "./chatlist.css";
import GroupIcon from '@mui/icons-material/Group'


function ChatItem({
  name,
  lastMessage,
  time,
  unread,
  active,
  onClick,
  isGroup,
  avatar
}) {
  return (
    <div
      className={`chat-list-section ${active ? "active" : ""}`}
      onClick={onClick}
    >
      <div className="chat-avatar-container">
        <div className={`chat-avatar ${isGroup ? "group-avatar" : ""}`}>
          {avatar ? (
            <img src={avatar} alt={name} />
          ) : isGroup ? (
              <GroupIcon />
          ) : (
            name.charAt(0).toUpperCase()
          )}
        </div>
      </div>

      <div className="chat-content">
        <div className="chat-top">
          <span className="chat-name">{name}</span>
          <span className="chat-seen">{time}</span>
        </div>

        <div className="chat-bottom">
          <span className="chat-msg">{lastMessage}</span>

          {unread > 0 && <span className="chat-unread">{unread}</span>}
        </div>
      </div>
    </div>
  );
}

export default ChatItem;
