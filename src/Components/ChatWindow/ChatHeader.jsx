import React from 'react'

function ChatHeader() {
  return (
    <div className='chat-header'>
        <div className="chat-user">
            <div className="chat-user-avatar"></div>

            <div>
                <h3>Catherine Richardson</h3>
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
