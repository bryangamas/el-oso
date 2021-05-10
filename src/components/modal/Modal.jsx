import React from 'react'
import reactDom from 'react-dom';
import "../../styles/components/Modal/Modal.css"

const Modal = ({ children, onClose, isOpen }) => {
  
  if(!isOpen){
    return null;
  }

  return reactDom.createPortal(
    <div className="Modal">
      <div className="Modal__container">
        {
          onClose &&
          <button onClick={onClose} className="Modal__close-button">
            X
          </button>
        }
        {children}
      </div>
    </div>,
    document.getElementById('modal')
  ); 
}

export default Modal
