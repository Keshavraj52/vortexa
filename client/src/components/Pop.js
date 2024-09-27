import React from 'react'
import "./pop.css"
import { Link } from 'react-router-dom';

function Pop({ isOpen, onClose, children }) {
    if (!isOpen) return null;
  return (
    <>
    <div className="popup-overlay">
      <div className="popup">
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
        {children}
      </div>
    </div>
    <div class="register-component-container4"></div>
              <button type="button" class="register-component-button button">
               <Link to="/login"><span>Register</span></Link> 
              </button>
              <span class="register-component-text5">
               <Link to="/login"> <span>Already have an account ?</span></Link>
              </span>
            
        </>
  )
}

export default Pop