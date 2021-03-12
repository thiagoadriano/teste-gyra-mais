import React, {useState} from 'react';
import { useMutation } from '@apollo/client';

import {RedirectRooms} from '../../services/redirect';
import {CREATE_NICKNAME} from '../../schema/nickname';
import DbStorage from '../../services/dbLocal';
import Loading from '../loading/Loading';
import Modal from '../modal/Modal';

const MSG_ERROR = {
  EXISTS: 'Já exite um usuário com esse nome.',
  FIELD_CLEAR: 'Este campo precisa ser preenchido.'
};

const configMutation = {
  update(cache, {data: {createUser: {nickname, id}}}) {
    debugger
    DbStorage.nickname = nickname;
    DbStorage.userId = id;
    //RedirectRooms();
  },
  onCompleted() {

  }
};

const NickName = () => {
  
  const [isValid, setIsValid] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');
  const [createUser, {loading, error}] = useMutation(CREATE_NICKNAME, configMutation);

  function sendNickname(evt) {
    evt.preventDefault();
    const form = evt.target;
    const nickname = form.nickname.value;
    setIsValid(true);
    setErrorMsg('');
    if (nickname) {    
      createUser({variables: {name: nickname}});
      if (error) {
        setIsValid(false);
        setErrorMsg(error.message);
      }
    } else {
      setIsValid(false);
      setErrorMsg(MSG_ERROR.FIELD_CLEAR);
    }
  };
  
  return (
    <>
      <Loading isVisible={loading} />
      {!loading &&
        <Modal removeClose='true'>
          <form onSubmit={sendNickname}>
            <div className="form-group">
              <label htmlFor="nickname">Nome de usuário</label>
              <input type="text" className={`form-control ${isValid ? '' : 'is-invalid'}`} id="nickname" name="nickname" />
              {!isValid && <span className="invalid-feedback d-block">{errorMsg}</span>}
            </div>
            <button type="submit" className="btn btn-primary">Criar NickName</button>
          </form>
        </Modal>
      }
    </>
  )
};

export default NickName;
