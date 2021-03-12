import React from 'react';
import './Message.css';

const Message = ({author, time, text}) => (
    <div className="box-message">
        <div className="row">
            <div className="col-md-1 col-sm-2">
                <div className="thumb-message">
                    <img src="/assets/user_icon.svg" alt="avatar user" />
                </div>
            </div>
            <div className="col-md-11 col-sm-10">
                <h3 className="user-message">{author}</h3>
                <p className="time-message"><small>{time}</small></p>
                <p className="text-message">{text}</p>
            </div>
        </div>
    </div>
);

export default Message;
