import { useState } from 'react'
import './App.css'

import Header from './Components/Header/Header'
import Tab from './Components/Tabs/Tab'
import Navigation from './Components/Navigation/Navigation'
import ChatWindow from './Components/ChatWindow/ChatWindow'
import ChatList from './Components/ChatLists/ChatList'
import chatData from './chatData'

function App() {
  const [activeChat, setActiveChat] = useState(chatData[0])

  return (
    <div className='app-layout'>
      <Navigation />

      <div className="left-panel">
        <Header />
        <Tab />
        <ChatList
          chats={chatData}
          activeChat={activeChat}
          onSelectChat={setActiveChat}
        />
      </div>

      <ChatWindow activeChat={activeChat} />
    </div>
  )
}

export default App
