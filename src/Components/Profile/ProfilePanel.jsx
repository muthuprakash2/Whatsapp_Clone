import './ProfilePanel.css';

function ProfilePanel() {
  return (
    <div className="profile-panel">
      <div className="profile-header">
        <h2>Profile</h2>
        <p className="profile-subtitle">Personal Information & Settings</p>
      </div>

      <div className="profile-card">
        <div className="profile-menu-btn">⁝</div>
        
        <div className="profile-avatar-large">
          <img src="https://i.pravatar.cc/150?img=1" alt="Profile" />
        </div>

        <h3 className="profile-name">Catherine Richardson</h3>

        <button className="logout-btn">
          <span>🚪</span> Logout
        </button>
      </div>

      <div className="profile-info-list">
        <div className="profile-info-item">
          <div className="info-content">
            <div className="info-label">Local Time</div>
            <div className="info-value">10:25 PM</div>
          </div>
          <div className="info-icon">🕐</div>
        </div>

        <div className="profile-info-item">
          <div className="info-content">
            <div className="info-label">Birthday</div>
            <div className="info-value">26/02/2005</div>
          </div>
          <div className="info-icon">📅</div>
        </div>

        <div className="profile-info-item">
          <div className="info-content">
            <div className="info-label">Phone</div>
            <div className="info-value">+91 9876543210</div>
          </div>
          <div className="info-icon">📞</div>
        </div>

        <div className="profile-info-item">
          <div className="info-content">
            <div className="info-label">Email</div>
            <div className="info-value">sample@gmail.com</div>
          </div>
          <div className="info-icon">✉️</div>
        </div>

        <div className="profile-info-item">
          <div className="info-content">
            <div className="info-label">Website</div>
            <div className="info-value">www.sample.com</div>
          </div>
          <div className="info-icon">🌐</div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePanel;