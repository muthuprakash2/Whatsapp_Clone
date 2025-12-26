import { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Tab from './Components/Tabs/Tab';
import Navigation from './Components/Navigation/Navigation';
import ChatWindow from './Components/ChatWindow/ChatWindow';
import ChatList from './Components/ChatLists/ChatList';
import ProfilePanel from './Components/Profile/ProfilePanel';
import SettingsPanel from './Components/SettingPanel/SettingsPanel';
import chatData from './chatData';
import Register from './Components/Authentication/Register';
import Login from './Components/Authentication/Login';

function App() {
  const [activeChat, setActiveChat] = useState(chatData[0]);
  const [activeView, setActiveView] = useState('chat'); 

  const [loggedIn, setLoggedIn] = useState(false)
  const [ register, setRegister] = useState(false)

  if (!loggedIn){
    if(register){
      return (
        <Register 
        onRegister={() => setLoggedIn(true)}
        toLogin={() => setRegister(false)}
        />
      )
    }

    return(
      <Login
      onLogin={() => setLoggedIn(true)}
      toRegister={() => setRegister(true)}
      />
    )
  }

  return (
    <div className='app-layout'>
      <Navigation activeView={activeView} setActiveView={setActiveView} />
      
      {activeView === 'chat' ? (
        <>
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
        </>
      ) : (
        <>
          <ProfilePanel onLogout={() => setLoggedIn(false)} />
          <SettingsPanel />
        </>
      )}
    </div>
  );
}

export default App;