import React from 'react'
import ChatItem from './ChatItem'
import './chatlist.css'

function ChatList({ chats, activeChat, onSelectChat}) {
  return (
      <div className="chat-list">
        {chats.map(chat => (
          <ChatItem
            key={chat.id}
            {...chat}
            avatar={chat.avatar}  
            active={activeChat?.id === chat.id}
            onClick={() => onSelectChat(chat)}
          />
        ))}
      </div>
  )
}

export default ChatList