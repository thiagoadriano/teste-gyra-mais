import React from 'react';
import {Redirect, useLocation} from 'react-router-dom';
import DbStorage from '../../services/dbLocal';

const ValidateNickname = ({children}) => {
  const location = useLocation();
  const validates = ['/welcome', '/choose-nickname']

  if (!DbStorage.hasNickname() && !validates.includes(location.pathname)) {
    return <Redirect to='/' />;
  } 
  
  if(DbStorage.hasNickname() && validates.includes(location.pathname)) {
    return <Redirect to='/rooms' />;
  } 

  return children;
};

export default ValidateNickname;
