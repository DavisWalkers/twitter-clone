import React from 'react';
import { Provider, useDispatch } from 'react-redux';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import { Footer } from '../Footer/Footer';
import { store } from '../../store';
import { sendRequest } from '../../features/actions';

export const App = () => {
  return (
    <Provider store={store}>
      <React.Fragment>
        <Header />
        <Main />
        <Footer />
      </React.Fragment>
    </Provider>
  );
}