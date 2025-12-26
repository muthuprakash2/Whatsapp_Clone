import React from 'react'

function ChatHeader({ activeChat }) {
  return (
    <div className='chat-header'>
        <div className="chat-user">
            <div className="chat-user-avatar">
              {activeChat?.avatar ? (
                <img src={activeChat.avatar} alt={activeChat.name} />
              ) : (
                activeChat?.isGroup ? '👥' : activeChat?.name?.charAt(0).toUpperCase()
              )}
            </div>

            <div>
                <h3>{activeChat?.name}</h3>
                <span className="status">Online</span>
            </div>
        </div>

        <div className="chat-header-icons">
            <span>🔍</span>
            <span>📞</span>
            <span>⁝</span>
        </div>
    </div>
  )
}

export default ChatHeader
