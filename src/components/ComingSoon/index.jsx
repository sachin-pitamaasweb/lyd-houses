// src/Modal.js
import React, { useEffect } from 'react';
import './style.css';
import comingSoonImage from '../../assets/move/coming.jpeg';
const ComingSoon = ({ isOpen, onClose }) => {
 
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
        console.log('Modal closed after 10 seconds');
      }, 10000);

      return () => clearTimeout(timer); 
    }
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }


  const handleClickOutside = (event) => {
    if (event.target.className === 'modal-backdrop') {
      onClose();
    }
  }

  return (
    <div className="modal-backdrop" onClick={handleClickOutside}>
      <div className="modal-content">
        <img src={comingSoonImage} alt="Coming Soon" loading="lazy" className='coming-soon'/>
      </div>
    </div>
  );
};

export default ComingSoon;
