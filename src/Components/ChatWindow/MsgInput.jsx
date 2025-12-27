import React, { useState } from 'react'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import MicIcon from '@mui/icons-material/Mic';

function MsgInput({ onSend }) {
  const [message, setMessage] = useState("")

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage("");
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <div className='msg-input'>
      <div className="left-icons">
        <button className="emoji-btn">
          <EmojiEmotionsIcon />
        </button>
        <button className="mic-btn">
          <MicIcon />
        </button>
      </div>

      <input 
        type="text" 
        placeholder='Type your message here...'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className='send-btn' onClick={handleSend}>▶</button>
    </div>
  )
}

export default MsgInput