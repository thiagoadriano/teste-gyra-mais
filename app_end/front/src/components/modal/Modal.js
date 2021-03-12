import React from 'react';
import './Modal.css';

const checkModalClose = (removeClose, callbackClose) => {
    if (removeClose && removeClose === 'true') {
        return null;
    }
    return <button 
              type="button" 
              className="modal-app-close btn btn-danger"
              onClick={() => {
                if (callbackClose) callbackClose();
              }}>X</button>;
}

const Modal = ({removeClose, removeContentBox, children, callbackClose}) => (
    <>
        <div className="overlay" />
        <div className="modal-app">
            {checkModalClose(removeClose, callbackClose)}
            <div className={removeContentBox ? 'text-center' : 'modal-app-content'}>
                {children}
            </div>
        </div>
    </>
);

export default Modal;
