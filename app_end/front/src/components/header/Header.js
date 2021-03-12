import React from 'react';
import {Redirect} from 'react-router-dom';
import logo from '../../logo.svg';
import DbStorage from '../../services/dbLocal';
import './Header.css';

const handleExitApp = () => {
  DbStorage.deleteNickname();
  <Redirect to="/" />
}

const Header = () => {
    return (
        <header className="navbar">
            <div className="navbar-brand" href="#">
                <img src={logo} alt="logo" className="logo" />
            </div>
            <button type="button" className="btn btn-danger" onClick={handleExitApp}>
                <img src="/assets/close-cross.svg" className="close-room" alt="icone exit"/>
                Sair do Chat
            </button>
        </header>
    )
};

export default Header;
