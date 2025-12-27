import './header.css'
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Header() {
  return (
    <div className="left-header">
      <h2 className='left-header-title'>Chats</h2>

      <div className="left-header-icons">
        <span>
          <NotificationsIcon />
        </span>
        <span>
          <MoreVertIcon />
        </span>
      </div>
    </div>
  )
}
