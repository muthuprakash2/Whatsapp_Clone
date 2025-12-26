import './navigation.css';

function Navigation({ activeView, setActiveView }) {
  return (
    <div className='navigation'>
      <div className="nav-logo">💬</div>
      <div className="nav-items">
        <button 
          className={`nav-btn ${activeView === 'chat' ? 'active' : ''}`}
          onClick={() => setActiveView('chat')}
        >
          💬
        </button>
        <button className="nav-btn">👥</button>
        <button 
          className={`nav-btn ${activeView === 'profile' ? 'active' : ''}`}
          onClick={() => setActiveView('profile')}
        >
          👤
        </button>
      </div>
    </div>
  );
}

export default Navigation;