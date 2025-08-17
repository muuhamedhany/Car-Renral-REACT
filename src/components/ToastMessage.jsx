import React, { useState, useEffect } from 'react';

const ToastMessage = ({ message, show, onClose }) => {
  const [isVisible, setIsVisible] = useState(show);

  useEffect(() => {
    setIsVisible(show);
    if (show) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        if (onClose) onClose();
      }, 6000); // 3 seconds
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed  bottom-3   left-3 blur-background 
    shadowPrim border border-[#b0ada958]  px-8 py-4 pr-25 z-50 
    rounded-[16px] "
    >
      {message}
    </div>
  );
};

export default ToastMessage;
