import './ProfilePanel.css';

function ProfilePanel({ data, onLogout }) {
  return (
    <div className="profile-panel">
      <div className="profile-header">
        <h2>Profile</h2>
        <p className="profile-subtitle">Personal Information & Settings</p>
      </div>

      <div className="profile-card">
        <div className="profile-menu-btn">⁝</div>

        <div className="profile-avatar-large">
          <img src={data.avatar} alt="Profile" />
        </div>

        <h3 className="profile-name">
          {data.firstName} {data.lastName}
        </h3>

        <button className="logout-btn" onClick={onLogout}>
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
            <div className="info-value">{data.birthDate}</div>
          </div>
          <div className="info-icon">📅</div>
        </div>

        <div className="profile-info-item">
          <div className="info-content">
            <div className="info-label">Phone</div>
            <div className="info-value">{data.mobile}</div>
          </div>
          <div className="info-icon">📞</div>
        </div>

        <div className="profile-info-item">
          <div className="info-content">
            <div className="info-label">Email</div>
            <div className="info-value">{data.email}</div>
          </div>
          <div className="info-icon">✉️</div>
        </div>

        <div className="profile-info-item">
          <div className="info-content">
            <div className="info-label">Website</div>
            <div className="info-value">{data.website}</div>
          </div>
          <div className="info-icon">🌐</div>
        </div>

        <div className="profile-info-item">
          <div className="info-content">
            <div className="info-label">Address</div>
            <div className="info-value">{data.address}</div>
          </div>
          <div className="info-icon">📢</div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePanel;
