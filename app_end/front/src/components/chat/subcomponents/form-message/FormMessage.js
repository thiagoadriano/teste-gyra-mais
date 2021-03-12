import React from 'react';
import './FormMessage.css';

const submitMessage = (callback, evt) => {
  evt.preventDefault();
  const form = evt.target;
  const message = form.mensagem.value.trim();
  if (message) {
    callback(message);
    form.reset();
  }
};

const pressKeyChange = evt => {
  //evt.preventDefault();
  const isEnter = evt.key.includes('Enter');
  const isPressShift = evt.shiftKey;
  const textArea = evt.target;

  if (isEnter && !isPressShift) {
    textArea.form.requestSubmit();
    textArea.value = "";
  }
};

const FormMessage = ({callbackSend}) => (
  <form onSubmit={submitMessage.bind(null, callbackSend)}>
    <div className="input-group">
      <textarea onKeyDown={pressKeyChange} onKeyUp={pressKeyChange} className="form-control"  name="mensagem" rows="3"></textarea>
      <div className="input-group-append">
        <button type="submit" className="btn btn-success">Enviar</button>
      </div>  
    </div>
  </form>
);

export default FormMessage;
