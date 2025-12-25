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

function App() {
  const [activeChat, setActiveChat] = useState(chatData[0]);
  const [activeView, setActiveView] = useState('chat'); // 'chat' or 'profile'

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
          <ProfilePanel />
          <SettingsPanel />
        </>
      )}
    </div>
  );
}

export default App;