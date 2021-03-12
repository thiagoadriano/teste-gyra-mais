import React from 'react';
import Message from '../message/Message';
import './Messages.css';

const Messages = ({messages}) => {  
  return (
    <div className="list-messages">
      {messages.map((data, idx) => (
        <div key={idx} className={`item-message ${data.isMy ? 'right' : 'left'}`}>
            <Message {...data} />
        </div>
      ))}
    </div>
  );
};

export default Messages;
