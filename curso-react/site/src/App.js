import React from 'react';
import {CursoIndex} from './paginas/curso'
import {ContatoIndex} from './paginas/contato'
import {MenuIndex} from './paginas/menu'


import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/jquery/dist/jquery.min';
import '../node_modules/popper.js/dist/umd/popper.min';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import '../node_modules/bootstrap/dist/css/bootstrap.css';


function App() {
  return (

    <div>
      <MenuIndex/>
      <CursoIndex/>
      <ContatoIndex/>
    </div>
  );
}

export default App;
