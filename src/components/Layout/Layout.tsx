import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import Header from '../Header/Header';
import Router from '../Router/Router';

const Layout: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Router />
    </BrowserRouter>
  );
};

export default Layout;
