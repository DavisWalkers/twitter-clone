import React from 'react';
import { Provider } from 'react-redux';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import { Footer } from '../Footer/Footer';
import { store } from '../../store';

export const App = () => {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Header />
        <Main />
        <Footer />
      </Provider>
    </React.Fragment>
  );
};