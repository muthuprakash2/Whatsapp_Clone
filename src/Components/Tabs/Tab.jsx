import React from 'react'
import './tab.css'
import SearchIcon from '@mui/icons-material/Search';

function Tab() {
  return (
      <div className="tab-area">
        <select className="chat-filter">
          <option>All Chats</option>
          <option>Unread</option>
          <option>Groups</option>
        </select>

        <div className="search-tab">
          <input type="text" placeholder='Search Chats'/>
          <span>
            <SearchIcon />
          </span>
        </div>
      </div>
  )
}

export default Tab
