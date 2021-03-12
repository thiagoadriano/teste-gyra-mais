import React from 'react';
import logo from '../../logo.svg';
import './Welcome.css';
import {Link} from 'react-router-dom';
import Modal from '../modal/Modal';

const Welcome = () => {
  return (
    <>
      <Modal removeClose='true'>
        <div className="welcome-app text-center">
          <img src={logo} alt="Logo GyraMais Chat" className="logo-welcome" />
          <h3>Olá, tudo bem?</h3>
          <p>Este é o chat para o teste de desenvolvedor do GyraMais.</p>
          <p>Para começar clique abaixo e crie seu nickname.</p>
          <Link to="/choose-nickname">
              <button type="button" className="btn btn-success btn-sm btn-block">Criar nickname</button>
          </Link>
        </div>
      </Modal>
    </>
  )
};

export default Welcome;
