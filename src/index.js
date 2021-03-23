import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './components/App/App';
import { sendRequest } from './features/actions';
import { store } from './store';
import './styles/main.scss';

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

render();
store.subscribe(render);

const url = 'https://gorest.co.in/public-api/posts';
store.dispatch(sendRequest(url));
