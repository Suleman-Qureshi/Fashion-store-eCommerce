"use client"
import React from 'react';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import axios from "axios"
const Notification = ({ notification }) => {

  if (!notification) return null;
  
  const { message, type } = notification;
  const typeStyles = {
    success: 'bg-green-100 text-green-700 border-green-400',
    error: 'bg-red-100 text-red-700 border-red-400',
    info: 'bg-blue-100 text-blue-700 border-blue-400',
  };

  return (
    <div className={`fixed bottom-4 left-4 z-50 px-4 py-2 rounded-md border shadow-lg flex items-center gap-2 ${typeStyles[type]}`}>
      {type === 'success' && <AiOutlineCheckCircle />}
      {type === 'error' && <AiOutlineCloseCircle />}
      <span className="text-sm font-medium">{message}</span>
    </div>
  );
};

export default Notification;