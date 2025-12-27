import React from 'react'

function MsgBubble({ text, type, time, avatar, status, isGroup }) {
  
  const getStatusIcon = () => {
    if (type !== "sent") return null;
    
    switch(status) {
      case "sent":
        return "✓";
      case "delivered":
        return "✓✓";
      case "read":
        return <span style={{ color: '#10b981' }}>✓✓</span>;
      default:
        return "○";
    }
  }

  return (
    <div className={`msg-row ${type === "sent" ? "sent" : "received"}`}>
      {type === "received" && (
        <div className="msg-avatar">
          {avatar ? (
            <img src={avatar} alt="avatar" />
          ) : isGroup ? (
            <span style={{ fontSize: '18px' }}>👥</span>
          ) : (
            <span style={{ fontSize: '18px', color: '#fff' }}>?</span>
          )}
        </div> 
      )}

      <div className="msg-content">
        <div className="msg-bubble">
          {text}
        </div>
        <div className="msg-meta">
          <span className="msg-time">{time}</span>
          {type === "sent" && (
            <span className="msg-status">{getStatusIcon()}</span>
          )}
        </div>
      </div>

      {type === "sent" && avatar && (
        <div className="msg-avatar msg-avatar-sent">
          <img src={avatar} alt="avatar" />
        </div>
      )}
    </div>
  )
}

export default MsgBubble