import { useState } from 'react';
import './SettingsPanel.css';

function SettingsPanel() {
  const [formData, setFormData] = useState({
    firstName: 'Catherine',
    lastName: 'Richardson',
    mobile: '+91 9876543210',
    birthDate: '26/02/2005',
    email: 'sample@gmail.com',
    website: 'www.sample.com',
    address: '1134 Ridder Park Road, San Fransisco, CA 94851'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleReset = () => {
    setFormData({
      firstName: 'Catherine',
      lastName: 'Richardson',
      mobile: '+91 9876543210',
      birthDate: '26/02/2005',
      email: 'sample@gmail.com',
      website: 'www.sample.com',
      address: '1134 Ridder Park Road, San Fransisco, CA 94851'
    });
  };

  const handleSave = () => {
    console.log('Saving changes:', formData);
    alert('Changes saved successfully!');
  };

  return (
    <div className="settings-panel">
      <div className="settings-header">
        <h2>Profile</h2>
        <p className="settings-subtitle">Personal Information & Settings</p>
      </div>

      <div className="settings-content">
        <div className="settings-section">
          <h3 className="section-title">Account</h3>
          <p className="section-subtitle">Update personal & contact information</p>

          <div className="form-grid">
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Mobile number</label>
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Birth date</label>
              <input
                type="text"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Website</label>
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group full-width">
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="settings-actions">
          <button className="reset-btn" onClick={handleReset}>
            Reset
          </button>
          <button className="save-btn" onClick={handleSave}>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default SettingsPanel;