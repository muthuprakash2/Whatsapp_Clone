import { useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
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
  const [activeChat, setActiveChat] = useState(null);
  const [loggedIn, setLoggedIn] = useState(true);
  const [chats, setChats] = useState(chatData);
  const navigate = useNavigate();

  const initialProfile = {
    firstName: "Catherine",
    lastName: "Richardson",
    mobile: "+91 9876543210",
    birthDate: "26/02/2005",
    email: "sample@gmail.com",
    website: "www.sample.com",
    address: "1134 Ridder Park Road, San Fransisco, CA 94851",
    avatar: "https://i.pravatar.cc/150?img=1",
  };

  const [savedProfile, setSavedProfile] = useState(initialProfile);
  const [draftProfile, setDraftProfile] = useState(initialProfile);

  const getCurrentTime = () => {
    return new Date().toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const updateChatMessages = (chatId, updateFn) => {
    setChats((prev) =>
      prev.map((chat) => (chat.id === chatId ? updateFn(chat) : chat))
    );

    if (activeChat?.id === chatId) {
      setActiveChat((prev) => updateFn(prev));
    }
  };

  const updateMessageStatus = (chatId, messageId, status) => {
    updateChatMessages(chatId, (chat) => ({
      ...chat,
      messages: chat.messages.map((msg) =>
        msg.id === messageId ? { ...msg, status } : msg
      ),
    }));
  };

  const sendMsg = (text) => {
    if (!activeChat || !text.trim()) return;

    const newMessage = {
      text: text.trim(),
      type: "sent",
      time: getCurrentTime(),
      status: "sent",
      id: Date.now(),
    };

    const preview = text.length > 40 ? text.substring(0, 40) + "..." : text;

    setChats((prev) =>
      prev.map((chat) =>
        chat.id === activeChat.id
          ? {
              ...chat,
              messages: [...chat.messages, newMessage],
              lastMessage: preview,
              time: "Just now",
            }
          : chat
      )
    );

    setActiveChat((prev) => ({
      ...prev,
      messages: [...prev.messages, newMessage],
    }));

    setTimeout(() => {
      updateMessageStatus(activeChat.id, newMessage.id, "delivered");
    }, 1000);

    setTimeout(() => {
      updateMessageStatus(activeChat.id, newMessage.id, "read");
    }, 2000);
  };

  const handleSelectChat = (chat) => {
    setActiveChat(chat);
    navigate("/chats");

    if (chat.unread > 0) {
      setChats((prev) =>
        prev.map((c) => (c.id === chat.id ? { ...c, unread: 0 } : c))
      );
    }
  };

  const handleLogin = () => {
    setLoggedIn(true);
    navigate("/chats");
  };

  const handleRegister = () => {
    setLoggedIn(true);
    navigate("/chats");
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setActiveChat(null);
    navigate("/login");
  };

  return (
    <Routes>
      <Route
        path="/login"
        element={
          loggedIn ? (
            <Navigate to="/chats" />
          ) : (
            <Login onLogin={handleLogin} />
          )
        }
      />
      <Route
        path="/register"
        element={
          loggedIn ? (
            <Navigate to="/chats" />
          ) : (
            <Register onRegister={handleRegister} />
          )
        }
      />

      <Route
        path="/chats"
        element={
          loggedIn ? (
            <div className="app-layout">
              <Navigation />
              <div className="left-panel">
                <Header />
                <Tab />
                <ChatList
                  chats={chats}
                  activeChat={activeChat}
                  onSelectChat={handleSelectChat}
                />
              </div>
              {activeChat ? (
                <ChatWindow
                  activeChat={activeChat}
                  onSend={sendMsg}
                  userAvatar={savedProfile.avatar}
                />
              ) : (
                <div
                  className="chat-window"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#6b7280",
                  }}
                >
                  <p>Select a chat to start messaging</p>
                </div>
              )}
            </div>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

      <Route
        path="/profile"
        element={
          loggedIn ? (
            <div className="app-layout">
              <Navigation />
              <ProfilePanel data={savedProfile} onLogout={handleLogout} />
              <SettingsPanel
                data={draftProfile}
                setData={setDraftProfile}
                onSave={() => setSavedProfile(draftProfile)}
              />
            </div>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

      <Route path="/" element={<Navigate to="/chats" replace />} />
    </Routes>
  );
}

export default App;
