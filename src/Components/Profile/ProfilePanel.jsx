import "./ProfilePanel.css";
import CakeIcon from '@mui/icons-material/Cake';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';

function ProfilePanel({ data, onLogout }) {
  return (
    <div className="profile-panel">
      <div className="profile-header">
        <h2>Profile</h2>
        <p className="profile-subtitle">Personal Information & Settings</p>
      </div>

      <div className="profile-card">
        <div className="profile-menu-btn">
          <MenuIcon />
          </div>

        <div className="profile-avatar-large">
          <img src={data.avatar} alt="Profile" />
        </div>

        <h3 className="profile-name">
          {data.firstName} {data.lastName}
        </h3>

        <button className="logout-btn" onClick={onLogout}>
          <span>
            <LogoutIcon />
            </span> Logout
        </button>
      </div>

      <div className="profile-info-list">

        <div className="profile-info-item">
          <div className="info-content">
            <div className="info-label">Birthday</div>
            <div className="info-value">{data.birthDate}</div>
          </div>
          <div className="info-icon">
            <CakeIcon />
          </div>
        </div>

        <div className="profile-info-item">
          <div className="info-content">
            <div className="info-label">Phone</div>
            <div className="info-value">{data.mobile}</div>
          </div>
          <div className="info-icon">
            <LocalPhoneIcon />
          </div>
        </div>

        <div className="profile-info-item">
          <div className="info-content">
            <div className="info-label">Email</div>
            <div className="info-value">{data.email}</div>
          </div>
          <div className="info-icon">
            <EmailIcon />
          </div>
        </div>

        <div className="profile-info-item">
          <div className="info-content">
            <div className="info-label">Website</div>
            <div className="info-value">{data.website}</div>
          </div>
          <div className="info-icon">
            <WebAssetIcon />
          </div>
        </div>

        <div className="profile-info-item">
          <div className="info-content">
            <div className="info-label">Address</div>
            <div className="info-value">{data.address}</div>
          </div>
          <div className="info-icon">
            <HomeIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePanel;