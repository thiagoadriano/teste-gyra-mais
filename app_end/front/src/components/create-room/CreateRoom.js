import React, {useState} from 'react';
import Modal from '../modal/Modal';

const ctrlStates = {
  errorMsg: {value: null, setValue: null},
  validated: {value: null, setValue: null}
}

const MSG_ERROR = {
  EXISTS: 'Já exite uma sala com esse nome.',
  FIELD_CLEAR: 'Este campo precisa ser preenchido.'
};

const sendCreate = (callbackCreate, evt) => {
  const form = evt.target;
  const name = form.roomName.value;

  ctrlStates.errorMsg.setValue('');
  ctrlStates.validated.setValue(false);

  if (name) {
    callbackCreate({
      id: Math.round(Math.random() * 1000),
      name,
      createdAt: '16/10/20 15:50'
    });
  } else {
    ctrlStates.errorMsg.setValue(MSG_ERROR.FIELD_CLEAR);
  }  
}

const CreateRoom = ({callbackClose, callbackCreate}) => {
  const [isValid, setIsValid] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  ctrlStates.errorMsg.value = errorMsg;
  ctrlStates.errorMsg.setValue = setErrorMsg;

  ctrlStates.validated.value = isValid;
  ctrlStates.validated.setValue = setIsValid;

  return (
    <Modal callbackClose={callbackClose}>
      <form onSubmit={sendCreate.bind(null, callbackCreate)}>
          <div className="form-group">
              <label htmlFor="roomName">Nome da Sala</label>
              <input type="text" className={`form-control${!isValid ? ' is-invalid' : ''}`} id="roomName" name="roomName" />
              {!isValid && <span className="invalid-feedback d-block">{errorMsg}</span>}
          </div>
          <button type="submit" className="btn btn-primary">Criar Sala</button>
      </form>
    </Modal>
  );
};

export default CreateRoom;
