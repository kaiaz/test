import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './Game';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div>
        <Game name = 'Forza' age = '18+'  task = "купить продукты"/>
        <Game name = 'Mortal Combat' age = '18+' task = "Выкинуть мусор"/>
        <Game name = 'Sonic' age = '12+' task = "Покормить кота"/>
    </div>,
    document.getElementById('root'));
registerServiceWorker();
