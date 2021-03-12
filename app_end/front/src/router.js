import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import NickName from './components/nickname/NickName';
import Rooms from './components/rooms/Rooms';
import Chat from './components/chat/Chat';
import Welcome from './components/welcome/Welcome';
import NoRoute from './components/no-route/NoRoute';
import ValidateNickname from './components/validate-nickname/ValidateNickname';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" children={<Redirect to="/welcome" />} />
      <Route path="/welcome">
        <ValidateNickname children={<Welcome />}/>
      </Route>
      <Route path="/choose-nickname">
        <ValidateNickname children={<NickName />}/>
      </Route>
      <Route path="/rooms">
        <ValidateNickname children={<Rooms />}/>
      </Route>
      <Route path="/chat/:roomName">
        <ValidateNickname children={<Chat />}/>
      </Route>
      <Route path="*">
        <NoRoute />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
