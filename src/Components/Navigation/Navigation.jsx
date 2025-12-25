import React from 'react'
import './navigation.css'

function Navigation() {
  return (
    <div className='navigation'>
      <div className="nav-logo">💬</div>

      <div className="nav-items">
        <button className="nav-btn active">💬</button>
        
        <button className="nav-btn">👥</button>
        <button className="nav-btn">📞</button>
        <button className="nav-btn">👤</button>
      </div>

      <div className="nav-bottom">
        <button className="nav-btn">👤</button>
        <button className="nav-btn">⚙️</button>
      </div>
    </div>
  )
}

export default Navigation
