import React from 'react'

function MsgInput() {
  return (
<div className='msg-input'>
  <div className="left-icons">
    <button className="emoji-btn">☺️</button>
    <button className="plus-btn">➕</button>
    <button className="mic-btn">🎤</button>
  </div>

  <input type="text" placeholder='Type your message here...'  />
  <button className='send-btn'>▶</button>
</div>

  )
}

export default MsgInput
