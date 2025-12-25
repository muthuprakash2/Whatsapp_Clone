import React from 'react'
import MsgBubbble from './MsgBubbble'

function MessageList() {
  return (
    <div className='msg-list'>
      <MsgBubbble text="No, I have not thought about that..." />
      <MsgBubbble text="Pictures will keep your audience form being bored..." />
      <MsgBubbble text="You are absolutley right..." />
      <MsgBubbble text="I know you. You can do it. Good luck, Jennifer!" />
    </div>
  )
}

export default MessageList
