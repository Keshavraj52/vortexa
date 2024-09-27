import React,{useState} from 'react'
import Pop from './Pop';
import { Link } from 'react-router-dom';

function Caseup() {
    const [isPopupOpen, setPopupOpen] = useState(false);

    const openPopup = () => {
      setPopupOpen(true);
    };
  
    const closePopup = () => {
      setPopupOpen(false);
    };
  return (
    <>
    <div>
      <h1>Your App</h1>
      <button onClick={openPopup}>Open Popup</button>
      <Pop isOpen={isPopupOpen} onClose={closePopup}>
        <h2>This is a Popup!</h2>
        <p>Popup content goes here.</p>
      </Pop>
    </div>
    </>
  )
}

export default Caseup