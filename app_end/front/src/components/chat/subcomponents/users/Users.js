import React from 'react';
import './Users.css';

const Users = ({list}) => (
    <ul className="list-group">
        <li className="list-group-item active">Usuários na sala</li>
        {list.map((user, idx) => (
          <li key={idx} className="list-group-item">
              <img src="/assets/user_icon.svg" className="list-item-ico" alt="avatar"/>
              {user}
          </li>
        ))}
    </ul>
);

export default Users;
