import { Link, useLocation } from 'react-router-dom';
import './navigation.css';

function Navigation() {
  const location = useLocation();

  return (
    <div className='navigation'>
      <div className="nav-logo">💬</div>
      <div className="nav-items">
        <Link to="/chats" className={`nav-btn ${location.pathname === '/chats' ? 'active' : ''}`}>
          💬
        </Link>
        <button className="nav-btn">👥</button>
        <Link to="/profile" className={`nav-btn ${location.pathname === '/profile' ? 'active' : ''}`}>
          👤
        </Link>
      </div>
    </div>
  );
}

export default Navigation