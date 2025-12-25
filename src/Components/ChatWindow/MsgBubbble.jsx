import React from 'react'

function MsgBubbble() {
  return (
    <div className={`msg-row ${sent ? "sent" : "received"}`}>
      <div className="msg-bubble">
        {text}
      </div>
    </div>
  )
}

export default MsgBubbble
