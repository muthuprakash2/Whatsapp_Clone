import React, { useState } from 'react'
import ChatItem from './ChatItem'
import chatData from '../../chatData'

function ChatList() {
  const [activeId,setActiveId] = useState(1)

  return (
      <div className="chat-list">
        {chatData.map(chat => (
          <ChatItem
          key={chat.id}
          name={chat.name}
          message={chat.message}
          time={chat.time}
          unread={chat.unread}
          isGroup={chat.isGroup}
          active={chat.id === activeId}
          onClick={() =>
            setActiveId(chat.id)} />
          
        ))}
      </div>
  )
}

export default ChatList
