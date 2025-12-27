import { Link, useLocation } from 'react-router-dom';
import './navigation.css';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ChatIcon from '@mui/icons-material/Chat';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Navigation() {
  const location = useLocation();

  return (
    <div className='navigation'>
      <div className="nav-logo">
        <WhatsAppIcon />
      </div>
      <div className="nav-items">
        <Link to="/chats" className={`nav-btn ${location.pathname === '/chats' ? 'active' : ''}`}>
          <ChatIcon />
        </Link>
        <Link to="/profile" className={`nav-btn ${location.pathname === '/profile' ? 'active' : ''}`}>
          <AccountBoxIcon />
        </Link>
      </div>
    </div>
  );
}

export default Navigation