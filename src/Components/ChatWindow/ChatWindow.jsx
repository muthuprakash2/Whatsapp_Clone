import React from 'react'
import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import MsgInput from './MsgInput'
import "./chatWindow.css"

function ChatWindow() {
  return (
    <div className='chat-window'>
      <ChatHeader />
      <MessageList />
      <MsgInput />
    </div>
  )
}

export default ChatWindow
