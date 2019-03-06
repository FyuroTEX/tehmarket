import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import App from './App.js';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import Routers from './Routers';


ReactDOM.render(
  <BrowserRouter>
    <App>
      <Routers />
    </App>
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
