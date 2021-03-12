import React from 'react';
import Modal from '../modal/Modal';

const Loading = ({isVisible}) => (
  <>
    {isVisible && 
      <Modal removeClose="true" removeContentBox="true">
        <svg version="1.0" width="72px" height="72px" viewBox="0 0 128 128"><g><circle cx="16" cy="64" r="16" fill="#ffffff" fillOpacity="1"/><circle cx="16" cy="64" r="14.344" fill="#ffffff" fillOpacity="1" transform="rotate(45 64 64)"/><circle cx="16" cy="64" r="12.531" fill="#ffffff" fillOpacity="1" transform="rotate(90 64 64)"/><circle cx="16" cy="64" r="10.75" fill="#ffffff" fillOpacity="1" transform="rotate(135 64 64)"/><circle cx="16" cy="64" r="10.063" fill="#ffffff" fillOpacity="1" transform="rotate(180 64 64)"/><circle cx="16" cy="64" r="8.063" fill="#ffffff" fillOpacity="1" transform="rotate(225 64 64)"/><circle cx="16" cy="64" r="6.438" fill="#ffffff" fillOpacity="1" transform="rotate(270 64 64)"/><circle cx="16" cy="64" r="5.375" fill="#ffffff" fillOpacity="1" transform="rotate(315 64 64)"/><animateTransform attributeName="transform" type="rotate" values="0 64 64;315 64 64;270 64 64;225 64 64;180 64 64;135 64 64;90 64 64;45 64 64" calcMode="discrete" dur="800ms" repeatCount="indefinite"></animateTransform></g>
        </svg>
      </Modal>
    }
  </>
);

export default Loading;
