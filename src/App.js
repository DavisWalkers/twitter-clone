import React from 'react';
import { Header } from './common/Header/Header';
import { Main } from './common/Main/Main';
import { Footer } from './common/Footer/Footer';

export const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Main />
      <Footer />
    </React.Fragment>
  );
};