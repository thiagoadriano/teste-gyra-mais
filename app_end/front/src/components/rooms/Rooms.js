import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Rooms.css';
import CreateRom from '../create-room/CreateRoom';

const ctrlStates = {
  modalCreate: {isView: null, setView: null},
  listRoons: {value: null, setValue: null}
};

const roomsList = [{
  name: 'Galera',
  time: '16/11/20 15:58',
  id: 1
}];

const createRoom = (roomCreated) => {
  ctrlStates.listRoons.setValue([...ctrlStates.listRoons.value, roomCreated]);
  ctrlStates.modalCreate.setView(false);
}

const Rooms = () => {
  const [isViewCreateRoom, setIsViewCreateRoom] = useState(false);
  const [listRoons, setListRoons] = useState(roomsList);

  ctrlStates.modalCreate.isView = isViewCreateRoom;
  ctrlStates.modalCreate.setView = setIsViewCreateRoom;

  ctrlStates.listRoons.value = listRoons;
  ctrlStates.listRoons.setValue = setListRoons;
  
  return (
    <>
      {isViewCreateRoom && 
        <CreateRom 
          callbackClose={setIsViewCreateRoom.bind(null, false)}
          callbackCreate={createRoom}
        />
      }
      <div className="row">
        <div className="col-9">
          <h3>Salas disponíveis</h3>
        </div>
        <div className="col-3 text-right">
          <button className="btn btn-info btn-sm" onClick={setIsViewCreateRoom.bind(null, true)}>
            <big>+</big> Criar nova sala
          </button>
        </div>
      </div>
      
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Sala</th>
            <th scope="col">Criado em</th>
            <th scope="col">Entrar</th>
          </tr>
        </thead>
        <tbody>
          {listRoons.map((room, idx) => (
             <tr key={idx}>
              <td scope="row">{room.id}</td>
              <td>{room.name}</td>
              <td>{room.createdAt}</td>
              <td>
                <Link to={`/chat/${room.name}`}>
                  <button className="btn btn-sm btn-link p-0">
                      <img src="assets/log-in.svg" alt="Entrar na sala" className="login-room"/>
                  </button>
                </Link>
              </td>
           </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Rooms;
