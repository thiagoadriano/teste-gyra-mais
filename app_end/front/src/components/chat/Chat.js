import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import {RedirectRooms} from '../../services/redirect';
import Users from './subcomponents/users/Users';
import Messages from './subcomponents/messages/Messages';
import FormMessage from './subcomponents/form-message/FormMessage';

import './Chat.css';

const exitRoom = () => {
  RedirectRooms();
};

const sendMessage = (message) => {
  console.log(message);
};

const list = [
  {author: 'Braga Nunes', time: '12/11/2020 11:20', text: 'teste de envio 1', isMy: true},
  {author: 'Alberto Ferreira', time: '12/11/2020 11:20', text: 'teste de envio 2', isMy: false},
  {author: 'Braga Nunes', time: '13/11/2020 11:20', text: 'teste de envio 1 teste de envio 1 teste de envio 1 teste de envio 1 teste de envio 1 teste de envio 1 teste de envio 1 teste de envio 1 teste de envio 1 teste de envio 1', isMy: true},
  {author: 'Braga Nunes', time: '13/11/2020 18:19', text: 'teste de envio 4', isMy: true},
  {author: 'Alberto Ferreira', time: '13/11/2020 18:20', text: 'teste de novo', isMy: false}
];

const listUser = [
  'Alberto Braga',
  'Fagundes',
  'Mariliam'
];

const Chat = () => {
  const {roomName} = useParams();
  const [listUsers, setlistUsers] = useState(listUser);
  const [messages, setmessages] = useState(list);

  return (
  <div className="chat-box">
    <div className="row">
      <div className="col-9">
        <h1 className="title-room">Sala <strong>{roomName}</strong></h1>
      </div>
      <div className="col-3 text-right">
        <button type="button" className="btn btn-sm btn-info" onClick={exitRoom}>
          <img src="/assets/exit_room.svg" className="ico-exit" alt="icone exit"/>
          Sair da sala
        </button>
      </div>
    </div>
    <div className="row">
      <div className="col-9">
        <Messages messages={messages} />
        <FormMessage callbackSend={sendMessage} />
      </div>
      <div className="col-3">
        <Users list={listUsers} />
      </div>
    </div>
  </div>
  );
}

export default Chat;
