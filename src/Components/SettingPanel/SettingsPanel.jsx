import './SettingsPanel.css';


function SettingsPanel({ data, setData, onSave }) {
    
    const defaultData = {
      firstName: 'Catherine',
      lastName: 'Richardson',
      mobile: '+91 9876543210',
      birthDate: '26/02/2005',
      email: 'sample@gmail.com',
      website: 'www.sample.com',
      address: '1134 Ridder Park Road, San Fransisco, CA 94851'
    };
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleReset = () => {
    setData({ ...defaultData, avatar: data.avatar });
  };

  const handleSave = () => {
    onSave();
    alert('Changes saved successfully!');
  };

  return (
    <div className="settings-panel">
      <div className="settings-header">
        <h2>Settings</h2>
        <p className="settings-subtitle">Personal Information & Settings</p>
      </div>

      <div className="settings-content">
        <div className="settings-section">
          <h3 className="section-title">Account</h3>
          <p className="section-subtitle">
            Update personal & contact information
          </p>

          <div className="form-grid">
            <div className="form-group">
              <label>First Name</label>
              <input
                name="firstName"
                value={data.firstName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Last Name</label>
              <input
                name="lastName"
                value={data.lastName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Mobile number</label>
              <input
                name="mobile"
                value={data.mobile}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Birth date</label>
              <input
                name="birthDate"
                value={data.birthDate}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Email address</label>
              <input
                name="email"
                value={data.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Website</label>
              <input
                name="website"
                value={data.website}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group full-width">
            <label>Address</label>
            <input
              name="address"
              value={data.address}
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