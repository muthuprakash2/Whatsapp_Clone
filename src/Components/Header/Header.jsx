import React from 'react'
import './header.css'

export default function Header() {
  return (
    <>
    <section id="header" className='left-panel'>
        <div className="header-section">
            <h2 className='header-name'>Chats</h2>
            <button className='archieve'>Archieve</button>
            <h2 className='three-dot'>:</h2>
        </div>
    </section>
    </>
  )
}
