import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Tab from "./Components/Tabs/Tab";
import Navigation from "./Components/Navigation/Navigation";
import ChatWindow from "./Components/ChatWindow/ChatWindow";
import ChatList from "./Components/ChatLists/ChatList";
import ProfilePanel from "./Components/Profile/ProfilePanel";
import SettingsPanel from "./Components/SettingPanel/SettingsPanel";
import chatData from "./chatData";
import Register from "./Components/Authentication/Register";
import Login from "./Components/Authentication/Login";

function App() {
  const [activeChat, setActiveChat] = useState(chatData[0]);
  const [activeView, setActiveView] = useState("chat");

  const [loggedIn, setLoggedIn] = useState(true);
  const [register, setRegister] = useState(false);


  const [savedProfile, setSavedProfile] = useState({
    firstName: "Catherine",
    lastName: "Richardson",
    mobile: "+91 9876543210",
    birthDate: "26/02/2005",
    email: "sample@gmail.com",
    website: "www.sample.com",
    address: "1134 Ridder Park Road, San Fransisco, CA 94851",
    avatar: "https://i.pravatar.cc/150?img=1",
  });

  const [draftProfile, setDraftProfile] = useState(savedProfile);

  if (!loggedIn) {
    if (register) {
      return (
        <Register
          onRegister={() => {
            setLoggedIn(true);
            setRegister(false);
          }}
          toLogin={() => setRegister(false)}
        />
      );
    }

    return (
      <Login
        onLogin={() => {
          setLoggedIn(true);
          setRegister(false);
        }}
        toRegister={() => setRegister(true)}
      />
    );
  }

  return (
    <div className="app-layout">
      <Navigation activeView={activeView} setActiveView={setActiveView} />

      {activeView === "chat" && (
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
      )}

      {activeView === "profile" && (
        <>
          <ProfilePanel
            data={savedProfile}
            onLogout={() => {
              setLoggedIn(false);
              setRegister(false);
              setActiveView("chat");
            }}
          />

          <SettingsPanel
            data={draftProfile}
            setData={setDraftProfile}
            onSave={() => setSavedProfile(draftProfile)}
          />
        </>
      )}
    </div>
  );
}

export default App;
