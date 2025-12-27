import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import GroupIcon from '@mui/icons-material/Group'

function ChatHeader({ activeChat }) {
  return (
    <div className='chat-header'>
      <div className="chat-user">
        <div className="chat-user-avatar">
          {activeChat?.avatar ? (
            <img src={activeChat.avatar} alt={activeChat.name} />
          ) : activeChat?.isGroup ? (
            <GroupIcon />
          ) : (
            activeChat?.name?.charAt(0).toUpperCase()
          )}
        </div>

        <div>
          <h3>{activeChat?.name || 'Select a Chat'}</h3>
          <span className="status">Online</span>
        </div>
      </div>

      <div className="chat-header-icons">
        <SearchIcon />
        <LocalPhoneIcon />
        <MoreVertIcon />
      </div>
    </div>
  )
}

export default ChatHeader
