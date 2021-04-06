import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './components/App/App';
import { store } from './store/store';
import './styles/main.scss';
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
        <Router>
          <ReactNotification />
          <App />
        </Router>
      </React.StrictMode>
    </Provider>,
    document.getElementById('root')
  );
};

store.subscribe(render);
render();
