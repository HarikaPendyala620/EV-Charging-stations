import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Notification() {
  const [notifications, setNotifications] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/notifications')
      .then(response => {
        setNotifications(response.data);
      })
      .catch(error => {
        setError(error.message);
      });
  }, []);

  return (
    <div>
      <h1>Notifications</h1>
      <ul>
        {notifications.map(notification => (
          <li key={notification._id}>
            <p>{notification.message}</p>
            <p>{notification.createdAt}</p>
          </li>
        ))}
      </ul>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default Notification;