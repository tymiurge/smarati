import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/index.css';
import 'semantic-ui-css/semantic.min.css'
import App from './App';
import Cosmos from './components/cosmos'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Cosmos />, document.getElementById('root'));
registerServiceWorker();
