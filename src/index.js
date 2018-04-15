import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/index.css';
import 'semantic-ui-css/semantic.min.css'
import Root from './components/root'
import { store } from './store'

const appStore = store()

ReactDOM.render(<Root  store={appStore}/>, document.getElementById('root'));
