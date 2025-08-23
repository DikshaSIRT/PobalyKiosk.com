import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    fullname: "John Doe",
    phone: "+91 98765 43210",
    email: "john.doe@example.com",
    joinDate: "2024-01-15",
    lastLogin: "2024-01-20"
  });
  
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({ ...user });
  const [showSettings, setShowSettings] = useState(false);
  const [theme, setTheme] = useState('light');

  // Simulate fetching user data from localStorage or API
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setEditForm(JSON.parse(savedUser));
    }
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
    setEditForm({ ...user });
  };

  const handleSave = () => {
    setUser(editForm);
    localStorage.setItem('user', JSON.stringify(editForm));
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditForm({ ...user });
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/signin');
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <div className="home-container" style={{
      minHeight: '100vh',
      backgroundColor: theme === 'dark' ? '#1a1a1a' : '#f5f5f5',
      color: theme === 'dark' ? '#ffffff' : '#333333',
      padding: '20px'
    }}>
      {/* Header */}
      <div className="home-header" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '30px',
        padding: '20px',
        backgroundColor: theme === 'dark' ? '#2d2d2d' : '#ffffff',
        borderRadius: '10px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          color: theme === 'dark' ? '#ffffff' : '#ff2a2a',
          margin: 0 
        }}>
          Welcome, {user.fullname}! 👋
        </h1>
        
        <div style={{ display: 'flex', gap: '15px' }}>
          <button
            onClick={toggleTheme}
            style={{
              padding: '10px 15px',
              backgroundColor: theme === 'dark' ? '#ff2a2a' : '#333',
              color: '#ffffff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          
          <button
            onClick={() => setShowSettings(!showSettings)}
            style={{
              padding: '10px 15px',
              backgroundColor: '#ff2a2a',
              color: '#ffffff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            ⚙️ Settings
          </button>
          
          <button
            onClick={handleLogout}
            style={{
              padding: '10px 15px',
              backgroundColor: '#dc3545',
              color: '#ffffff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            🚪 Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="home-content" style={{ display: 'flex', gap: '30px' }}>
        
        {/* User Profile Section */}
        <div className="profile-section" style={{
          flex: '1',
          backgroundColor: theme === 'dark' ? '#2d2d2d' : '#ffffff',
          padding: '30px',
          borderRadius: '15px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ 
            fontSize: '1.8rem', 
            marginBottom: '25px',
            color: theme === 'dark' ? '#ffffff' : '#ff2a2a',
            borderBottom: `2px solid ${theme === 'dark' ? '#ff2a2a' : '#ff2a2a'}`,
            paddingBottom: '10px'
          }}>
            👤 User Profile
          </h2>
          
          {!isEditing ? (
            <div className="profile-info">
              <div style={{ marginBottom: '20px' }}>
                <strong style={{ fontSize: '1.1rem' }}>Full Name:</strong>
                <p style={{ fontSize: '1.2rem', margin: '5px 0' }}>{user.fullname}</p>
              </div>
              
              <div style={{ marginBottom: '20px' }}>
                <strong style={{ fontSize: '1.1rem' }}>Phone Number:</strong>
                <p style={{ fontSize: '1.2rem', margin: '5px 0' }}>{user.phone}</p>
              </div>
              
              <div style={{ marginBottom: '20px' }}>
                <strong style={{ fontSize: '1.1rem' }}>Email:</strong>
                <p style={{ fontSize: '1.2rem', margin: '5px 0' }}>{user.email}</p>
              </div>
              
              <div style={{ marginBottom: '20px' }}>
                <strong style={{ fontSize: '1.1rem' }}>Member Since:</strong>
                <p style={{ fontSize: '1.2rem', margin: '5px 0' }}>{user.joinDate}</p>
              </div>
              
              <div style={{ marginBottom: '20px' }}>
                <strong style={{ fontSize: '1.1rem' }}>Last Login:</strong>
                <p style={{ fontSize: '1.2rem', margin: '5px 0' }}>{user.lastLogin}</p>
              </div>
              
              <button
                onClick={handleEdit}
                style={{
                  padding: '12px 25px',
                  backgroundColor: '#ff2a2a',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontWeight: 'bold'
                }}
              >
                ✏️ Edit Profile
              </button>
            </div>
          ) : (
            <div className="edit-form">
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                  Full Name:
                </label>
                <input
                  type="text"
                  value={editForm.fullname}
                  onChange={(e) => setEditForm({...editForm, fullname: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #ddd',
                    borderRadius: '5px',
                    fontSize: '16px',
                    backgroundColor: theme === 'dark' ? '#444' : '#ffffff',
                    color: theme === 'dark' ? '#ffffff' : '#333333'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                  Phone Number:
                </label>
                <input
                  type="text"
                  value={editForm.phone}
                  onChange={(e) => setEditForm({...editForm, phone: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #ddd',
                    borderRadius: '5px',
                    fontSize: '16px',
                    backgroundColor: theme === 'dark' ? '#444' : '#ffffff',
                    color: theme === 'dark' ? '#ffffff' : '#333333'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                  Email:
                </label>
                <input
                  type="email"
                  value={editForm.email}
                  onChange={(e) => setEditForm({...editForm, email: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #ddd',
                    borderRadius: '5px',
                    fontSize: '16px',
                    backgroundColor: theme === 'dark' ? '#444' : '#ffffff',
                    color: theme === 'dark' ? '#ffffff' : '#333333'
                  }}
                />
              </div>
              
              <div style={{ display: 'flex', gap: '15px' }}>
                <button
                  onClick={handleSave}
                  style={{
                    padding: '12px 25px',
                    backgroundColor: '#28a745',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    fontWeight: 'bold'
                  }}
                >
                  💾 Save Changes
                </button>
                
                <button
                  onClick={handleCancel}
                  style={{
                    padding: '12px 25px',
                    backgroundColor: '#6c757d',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    fontWeight: 'bold'
                  }}
                >
                  ❌ Cancel
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Quick Actions Section */}
        <div className="actions-section" style={{
          flex: '1',
          backgroundColor: theme === 'dark' ? '#2d2d2d' : '#ffffff',
          padding: '30px',
          borderRadius: '15px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ 
            fontSize: '1.8rem', 
            marginBottom: '25px',
            color: theme === 'dark' ? '#ffffff' : '#ff2a2a',
            borderBottom: `2px solid ${theme === 'dark' ? '#ff2a2a' : '#ff2a2a'}`,
            paddingBottom: '10px'
          }}>
            🚀 Quick Actions
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <Link to="/dashboard" style={{ textDecoration: 'none' }}>
              <button style={{
                width: '100%',
                padding: '15px',
                backgroundColor: '#007bff',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 'bold',
                textAlign: 'left'
              }}>
                📊 Dashboard
              </button>
            </Link>
            
            <Link to="/product" style={{ textDecoration: 'none' }}>
              <button style={{
                width: '100%',
                padding: '15px',
                backgroundColor: '#28a745',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 'bold',
                textAlign: 'left'
              }}>
                🛍️ Products
              </button>
            </Link>
            
            <Link to="/walletrecharge" style={{ textDecoration: 'none' }}>
              <button style={{
                width: '100%',
                padding: '15px',
                backgroundColor: '#ffc107',
                color: '#333333',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 'bold',
                textAlign: 'left'
              }}>
                💰 Wallet Recharge
              </button>
            </Link>
            
            <Link to="/rti" style={{ textDecoration: 'none' }}>
              <button style={{
                width: '100%',
                padding: '15px',
                backgroundColor: '#17a2b8',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 'bold',
                textAlign: 'left'
              }}>
                📝 RTI Filing
              </button>
            </Link>
            
            <Link to="/pio-search" style={{ textDecoration: 'none' }}>
              <button style={{
                width: '100%',
                padding: '15px',
                backgroundColor: '#6f42c1',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 'bold',
                textAlign: 'left'
              }}>
                🔍 PIO Search
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Settings Modal */}
      {showSettings && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: theme === 'dark' ? '#2d2d2d' : '#ffffff',
            padding: '30px',
            borderRadius: '15px',
            maxWidth: '500px',
            width: '90%'
          }}>
            <h2 style={{ marginBottom: '20px', color: '#ff2a2a' }}>⚙️ Account Settings</h2>
            
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>
                Change Password:
              </label>
              <input
                type="password"
                placeholder="Enter new password"
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                  marginBottom: '10px'
                }}
              />
              <input
                type="password"
                placeholder="Confirm new password"
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #ddd',
                  borderRadius: '5px'
                }}
              />
            </div>
            
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>
                Notification Preferences:
              </label>
              <label style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                <input type="checkbox" defaultChecked style={{ marginRight: '10px' }} />
                Email Notifications
              </label>
              <label style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                <input type="checkbox" defaultChecked style={{ marginRight: '10px' }} />
                SMS Notifications
              </label>
              <label style={{ display: 'flex', alignItems: 'center' }}>
                <input type="checkbox" style={{ marginRight: '10px' }} />
                Push Notifications
              </label>
            </div>
            
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'flex-end' }}>
              <button
                onClick={() => setShowSettings(false)}
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#6c757d',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >
                Close
              </button>
              
              <button
                onClick={() => {
                  alert('Settings saved!');
                  setShowSettings(false);
                }}
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#28a745',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >
                Save Settings
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
