import React from 'react'

function MsgInput() {
  return (
    <div className='msg-input'>
      <button className="emoji-btn">☺️</button>
      <input type="text" placeholder='Type your message here...' />
      <button className='send-btn'>▶</button>
    </div>
  )
}

export default MsgInput
