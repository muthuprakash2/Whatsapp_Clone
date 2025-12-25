import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Tab from './Components/Tabs/Tab'
import ChatList from './Components/ChatLists/Chatlist'
import Navigation from './Components/Navigation/Navigation'
import ChatWindow from './Components/ChatWindow/ChatWindow'

function App() {

  return (
    <div className='app-layout'>
      <Navigation />
      <div className="left-panel">
        <Header />
        <Tab />
        <ChatList />
      </div>

      <ChatWindow />
    </div>
  )
}

export default App
