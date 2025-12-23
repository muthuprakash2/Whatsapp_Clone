import React from 'react'
import './tab.css'

function Tab() {
  return (
    <>
      <div className="filter-tabs left-panel">
        <span className="tab active">All</span>
        <span className="tab">Unread</span>
        <span className="tab">Groups</span>
      </div>
    </>
  )
}

export default Tab
