import React from 'react'

function MsgBubble({ text, type, time, avatar }) {
  return (
    <div className={`msg-row ${type === "sent" ? "sent" : "received"}`}>
      {type === "received" && avatar && (
        <div className="msg-avatar">
          <img src={avatar} alt="avatar" />
        </div> 
      )}

      <div className="msg-content">
        <div className="msg-bubble">
          {text}
        </div>
        <div className="msg-meta">
          <span className="msg-time">{time}</span>
          {type === "sent" && <span className="msg-status">...</span>}
        </div>
      </div>

      {type === "sent" && (
        <div className="msg-avatar msg-avatar-sent"></div>
      )}
    </div>
  )
}

export default MsgBubble
