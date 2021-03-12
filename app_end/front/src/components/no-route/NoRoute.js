import React from 'react';
import {Link} from 'react-router-dom';

const NoRoute = () => (
  <>
    <h2>Opsss! :(</h2>
    <p>Não foi encontrado nenhuma rota com a url informada.</p>
    <Link to="/">
      Clique aqui e acesse o início da pagina
    </Link>
  </>
);

export default NoRoute;
