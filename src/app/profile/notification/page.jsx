'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { formatDistanceToNow } from 'date-fns'; 
function NotificationsPanel() {
  const [notifications, setNotifications] = useState([]);
  const userId = typeof window !== 'undefined' ? localStorage.getItem('userId') : null;
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const res = await axios.get(`/api/notification/user/${userId}`);
        setNotifications(res.data);
      } catch (error) {
        console.error("Failed to fetch notifications", error);
      }
    };
    fetchNotifications();
  }, []);
  const deleteNotification = async (notificationId) => {
    try {
      await axios.delete(`/api/notification/${notificationId}`);
      setNotifications(prev => prev.filter(n => n._id !== notificationId));
    } catch (error) {
      console.error("Failed to delete notification", error);
    }
  };
  const typeBadge = {
    success: 'bg-green-100 text-green-700',
    error: 'bg-red-100 text-red-700',
    info: 'bg-blue-100 text-blue-700',
  };
  return (
    <div className="p-6 w-full max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">🔔 Notifications</h2>

      {notifications.length === 0 ? (
        <p className="text-gray-500">No notifications found.</p>
      ) : (
        <ul className="flex flex-col gap-4">
          {notifications.map((notification) => (
            <li
              key={notification._id}
              className="bg-white shadow border border-gray-200 rounded-lg p-4 flex justify-between items-center"
            >
              <div className="flex flex-col">
                <span className={`w-fit px-2 py-0.5 mb-1 text-xs font-semibold rounded-md ${typeBadge[notification.type]}`}>
                  {notification.type.charAt(0).toUpperCase() + notification.type.slice(1)}
                </span>
                <p className="text-gray-800">{notification.message}</p>
                <p className="text-sm text-gray-400 mt-1">
                  {formatDistanceToNow(new Date(notification.createdAt), { addSuffix: true })}
                </p>
              </div>

              <button
                className="text-red-500 hover:text-red-700 font-semibold text-sm"
                onClick={() => deleteNotification(notification._id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NotificationsPanel;