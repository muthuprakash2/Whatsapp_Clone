import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Tab from './Components/Tabs/Tab'

function App() {

  return (
    <>
      <Header />
      <div className="search-container left-panel" >
        <input type="text" placeholder='🔍 Search or Start a new chat' />
      </div>
      <Tab />
    </>
  )
}

export default App
