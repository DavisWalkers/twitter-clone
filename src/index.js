import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './components/App/App';
import { store } from './store/store';
import './styles/main.scss';

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
        <Router>
          <App />
        </Router>
      </React.StrictMode>
    </Provider>,
    document.getElementById('root')
  );
};

store.subscribe(render);
render();
